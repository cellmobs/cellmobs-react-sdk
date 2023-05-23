import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import Layout from 'layouts';
import PageContext from '../components/page-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { isError } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { register as registerUser, checkEmail } from 'js/cellmobs/api/auth';
import { faBars, faWindowClose } from '@fortawesome/pro-light-svg-icons'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import { RECAPTCHA_SITEKEY, SUBSCRIPTION_PLAN_ID } from '../js/cellmobs/constants';
import { jwtIsValid } from "js/cellmobs/common";
import Cookies from 'universal-cookie';

export async function getServerSideProps({req}) {
    const page = await renderPage('/signup')
    if (isError(page)) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
//   const cookies = new Cookies(req.headers.cookie);
//   if (!jwtIsValid(cookies.get('cmauth'))) {
//     return {
//       redirect: {
//         destination: '/private-beta-invite',
//         permanent: false,
//       },
//     };
//   }
  return {
        props: {
            page: page,
            params: {}
        }
    }
}

yup.addMethod(yup.string, "emailUnique", function (errorMessage) {
    return this.test(`test-email-unique`, errorMessage, async function (value) {
        const { path, createError } = this;
        return (
            await emailExists(value) == false || createError({ path, message: errorMessage })
            );
        });
});

// Avoid too many requests is email is the same
let lastEmail='';
let lastResponse;

async  function emailExists(email){
    if(lastEmail==email) return lastResponse;
    lastEmail = email;
    lastResponse = await checkEmail({ email: email })
    return lastResponse
}
    
const schema = yup.object({
    organization: yup.string().max( 255,'Organization name cannot be longer than 255 characters'),
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    agree: yup.bool().oneOf([true],'Please accept the terms of service'),
    email: yup.string().required('Please enter your email address')
        .email("Is not a valid email address")
        .emailUnique('Email already exists. Please login or reset your password.'),
    password: yup.string()
        .required('Please enter a new password')
        .min(8, 'Your password is too short.')
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/i, 'Password does not meet the minimum requirements.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  }).required();


export default function Signup(props) {

    const dispatch = useDispatch();
    let router = useRouter();

    const recaptchaRef = React.createRef();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const [fetching, setFetching] = useState(false)

    async function onSubmit(data) {
        setFetching(true)
        console.log(data);
        
        const recaptchaValue = recaptchaRef.current?.getValue();
        if(recaptchaValue==''){
            setFetching(false)
            Swal.fire({
                title: 'SignUp Failed!',
                text: 'Incorrect re-Captcha value. Try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }

        let params = { 'g-recaptcha-response' : recaptchaValue}

        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            password: data.password,
            planId: SUBSCRIPTION_PLAN_ID,
            organization: {
              name: data.organization !== '' ? data.organization : (data.firstName + ' ' + data.lastName),
            }
        }
        
        registerUser(newUser, params).then(res =>{

            setFetching(false)
            console.log(res);

            Swal.fire({
                title: 'Welcome to Cellmobs!',
                showCancelButton: false,
                confirmButtonText: 'Login now',
                text: "You're good to go. Login to start building!",
                icon: 'info',
              }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/login")
                } else if (result.isDenied) {
                  //Swal.fire('Changes are not saved', '', 'info')
                }
              })
    
        }).catch(err=>{
            setFetching(false)
            Swal.fire({
                title: 'Signup Failed!',
                text: "Something's not quite right. Try again!",
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        });


      
    }

    //console.log('login: ' + loginError);

    useEffect(() => {

    }, [register])

    return (
        <PageContext.Provider value={props}>
            <Layout>
                <div className="navbar-container">
                    <nav className="navbar navbar-expand-lg  navbar-light" data-overlay>
                        <div className="container">
                            <a className="navbar-brand navbar-brand-dynamic-color fade-page text-center" href="/">
                                <img alt="Logo" src="/images/logo-dark.png" style={{ maxHeight: '28px' }} />
                            </a>
                            <div className="d-flex align-items-center order-lg-3">
                                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                                    <FontAwesomeIcon icon={faBars} size="1x" className="mt-1" />
                                </button>
                            </div>
                            <div className="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end" id="navigation-menu">
                                <ul className="navbar-nav my-3 my-lg-0">
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>


                <div data-overlay className="min-vh-100 bg-light d-flex flex-column justify-content-md-center" style={{ 'padding-top': '100px' }}>
                    <section className="py-3">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8">
                                    <div className="card card-body shadow">
                                        <h1 className="h5 text-center">Sign Up for Free</h1>
                                        <form action="/login" method="post">
                                            <div className="form-group">
                                                <small>Company</small>
                                                <input type="text" autoFocus={true} {...register('organization', { required: false, maxLength: 255})} className="form-control" placeholder="Company Name (optional)" />
                                                <small className="form-error">{errors.organization?.message}</small>
                                            </div>
                                            <div className="form-group">
                                                <small>First Name</small>
                                                <input type="text" {...register('firstName', { required: true, maxLength: 255})} className="form-control" placeholder="First Name" />
                                                <small className="form-error">{errors.firstName?.message}</small>
                                            </div>
                                            <div className="form-group">
                                                <small>Last Name</small>
                                                <input type="text"  {...register('lastName', { required: true, maxLength: 255})} className="form-control" placeholder="Last Name" />
                                                <small className="form-error">{errors.lastName?.message}</small>
                                            </div>
                                            <div className="form-group">
                                                <small>Email</small>
                                                <input type="email" autoCapitalize="none" {...register('email', { required: true, maxLength: 255})} className="form-control" placeholder="Email Address" />
                                                <small className="form-error">{errors.email?.message}</small>
                                            </div>
                                            <div className="form-group">
                                                <small>Password</small>
                                                <input type="password" {...register('password', { required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/i })} id="password" autoCapitalize="none" name="password" className="form-control" placeholder="Password" />
                                                <small className="form-error">{errors.password?.message}</small>
                                            </div>
                                            <div className="form-group mb-4">
                                                <small>Confirm Password</small>
                                                <input type="password" {...register('confirmPassword')} id="confirmPassword" autoCapitalize="none" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                                                <small className="form-error">{errors.confirmPassword?.message}</small>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox text-small">
                                                    <input type="checkbox" className="custom-control-input" id="agree" value="true" {...register('agree')} />
                                                    <label className="custom-control-label" htmlFor="agree">I agree to the <a href="/terms" target="_blank">Terms of Service</a></label>
                                                    <div><small className="form-error">{errors.agree?.message}</small></div>
                                                </div>
                                            </div>
                                            <div style={{justifyContent: 'center', display:'flex'}}>
                                            <ReCAPTCHA
                                                className="mb-4"
                                                ref={recaptchaRef}
                                                sitekey={RECAPTCHA_SITEKEY}
                                                //onChange={onChange}
                                            />
                                            </div>
                                            <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit(onSubmit)}>
                                                Sign up
                                                {fetching &&
                                                    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
                                                }
                                            </button>

                                        </form>
                                    </div>
                                    <div className="text-center text-small mt-3">
                                        Already have an account? <a href="/login">Login Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </PageContext.Provider>
    )
}

/**
 *  Inline Style Example
 */
const styles = {
    title: {
        textAlign: 'center'
    }
}

Signup.defaultProps = {
    title: 'Sign In'
}