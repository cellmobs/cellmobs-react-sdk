import React, { useEffect, useMemo, useState } from 'react';
import { passwordResetRequest, resetPassword, sa } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { PASSWORD_ERROR} from '../redux/types/authTypes';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import Header from 'components/header';
import Layout from 'layouts';
import PageContext from '../components/page-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { isError } from '../js/cellmobs/common';
import { RECAPTCHA_SITEKEY} from '../js/cellmobs/constants';
import { renderPage } from 'js/cellmobs/api/page';
import { faBars, faWindowClose } from '@fortawesome/pro-light-svg-icons'
import ReCAPTCHA from "react-google-recaptcha";

export async function getServerSideProps({query}) {
    const page = await renderPage('/reset-password')
    if (isError(page)) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
    let rid = query?.rid;
    return {
        props: {
            page: page,
            params: {},
            rid: rid || ''
        }
    }
    
}

export default function ResetPassword(props) {

    const dispatch = useDispatch();
    let router = useRouter();

    const { register, handleSubmit } = useForm();

    let passwordError = useSelector(state => state.auth.error);
    let passwordReset = useSelector(state => state.auth.resetPassword);
    let fetching = useSelector(state => state.auth.fetching);

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const recaptchaRef = React.createRef();

    function onPasswordChange(e) {
        // TODO color inpout field according to password strength
    }

    async function onSubmit(data) {

        let errorMsg = '';
        const recaptchaValue = recaptchaRef.current?.getValue();

        if(!strongRegex.test(data.password)) {
            errorMsg = 'Your password is not strong enough!'
        }

        if(data.password !== data.passwordConfirm){
            errorMsg = 'Passwords do not match!'
        }

        if(recaptchaValue==''){
            errorMsg = 'Invalid captcha response!'
        }

        if(errorMsg!==''){
            showErrorAlert(errorMsg)
            return;
        }

        data.rid = props.rid;
        data['g-recaptcha-response'] = recaptchaValue;
        console.log(data)
        dispatch(resetPassword(data));

        Swal.fire({
            title: 'Success',
            html: 'Your password has been changed. <a href="/login">Click here to login</a>!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

    }

    function showErrorAlert(errorMsg){
        Swal.fire({
            title: 'Sorry!',
            text: errorMsg,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    //console.log('login: ' + loginError);

    useEffect(() => {
        register('password');
        if (passwordError && passwordError != null) {
            showErrorAlert('We could not find an account with this email. Try again!');
            dispatch({ type: PASSWORD_ERROR, payload: null });
        }
        

    }, [register])

    useMemo(() => {

        console.log(passwordReset)
        if(!passwordReset) return;

        Swal.fire({
                        title: 'Thanks',
                        text: 'Please check your email to reset your password!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
    },[passwordReset])

    useMemo(() => {

        console.log(passwordError)
        if(!passwordError) return;

        showErrorAlert('We could not find an account with this email. Try again!');

    },[passwordError])

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

                <div data-overlay className="min-vh-100 bg-light d-flex flex-column justify-content-md-center section-image"  style={{'paddingTop':'100px'}}>

                    <section className="py-3" section="main">

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-5 col-md-7">
                                    <div className="card card-body shadow">
                                        <h1 className="h5 text-center">Reset Password</h1>
                                        <form id="password-request">
                                        <small>At least 1 uppercase alpha character, 1 numeric character, 1 special character, min. 8 chars</small>
                                            <div className="form-group mt-3">
                                                <input type="password" className="form-control" name="password" onChange={onPasswordChange}  required="required" placeholder="Enter new password" autoCapitalize="none" autoFocus={true} id="password" {...register('password')} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="passwordConfirm" required="required" placeholder="Confirm new password" autoCapitalize="none" autoFocus={true} id="passwordConfirm" {...register('passwordConfirm')} />
                                            </div>
                                            <ReCAPTCHA
                                                className="mb-4"
                                                ref={recaptchaRef}
                                                sitekey={RECAPTCHA_SITEKEY}
                                                //onChange={onChange}
                                            />
                                            <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit(onSubmit)}>Save New Password
                                                {fetching && <FontAwesomeIcon size="1x" icon={faCircleNotch} className="fa-spin ml-2" />}
                                            </button>
                                        </form>
                                    </div>
                                    <div className="text-center text-small mt-3">
                                        Remembered your password? <a href="/login" style={{color:'#f1141f'}}>Sign in here</a>
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

ResetPassword.defaultProps = {
    title: 'Reset Password'
}