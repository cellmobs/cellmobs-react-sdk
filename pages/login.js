import React from 'react';
import { useEffect, useState } from 'react';
//import { login } from '../redux/actions/authActions';
import { login } from 'js/cellmobs/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LOGIN_ERROR, LOGIN_RESPONSE, LOGOUT } from '../redux/types/authTypes';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import Header from 'components/header';
import Layout from 'layouts';
import PageContext from '../components/page-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { isError } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { faBars, faWindowClose } from '@fortawesome/pro-light-svg-icons'
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import LoginContext from '../components/login-context';
import FormLogin from '../components/form-login';
import FormLoginMfa from '../components/form-login-mfa';
import Cookie from 'js-cookie';

export async function getServerSideProps(context) {
    const page = await renderPage('/login')
    if (isError(page)) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
    return {
        props: {
            page: page,
            params: {}
        }
    }
}

export default function Login(props) {

    const dispatch = useDispatch();
    let router = useRouter();

    const { register, handleSubmit } = useForm();
    const [loggingIn, setLoggingIn] = useState(false)
    const [form, setForm] = useState('login')
    const [loginResponse, setLoginResponse] = useState({})

    let loginError = useSelector(state => state.auth.error);
    let token = useSelector(state => state.auth.token);
    let user = useSelector(state => state.auth.user);

    async function onSubmit(data) {
        setLoggingIn(true)
        //dispatch(login(data));
        const recaptchaValue = recaptchaRef.current?.getValue();
        if(recaptchaValue==''){
            setLoggingIn(false)

            Swal.fire({
                title: 'Login Failed!',
                text: 'Incorrect re-Captcha value. Try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        data['g-recaptcha-response'] = recaptchaValue;

        const response = await login(data);
        if (isError(response)) {
            dispatch({type: LOGIN_ERROR, payload: response});
        }else {
            if(!response.identity.using2FA){
                dispatch({type: LOGIN_RESPONSE, payload: response});
            }
            setLoginResponse(response);
        }
        //dispatch({type: SET_FETCHING, payload: false})

    }

    //console.log('login: ' + loginError);

    const optionalConfigObject = {
        title: "Authentication Required", // Android
        color: "#e00606", // Android,
        fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
    }

    useEffect(() => {
        if (loginError && loginError != null) {
            /*
                Consolidate into an central Error handler
                https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux
            */
            Swal.fire({
                title: 'Login Failed!',
                text: 'Incorrect username and/or password. Try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            dispatch({ type: LOGIN_ERROR, payload: null });
            setLoggingIn(false)
        }

        if (loginResponse.jwt) {

            // redirect to MFA if enabled and login is successful.
            if(loginResponse.identity.using2FA == true){
                //router.push('/login-mfa')
                setForm('mfa')
                // let a = document.createElement('a')
                // a.href = '/login-mfa'
                // a.click()
                return
            }else{
                router.push('/')
                return
            }
        }
        setLoggingIn(false)

    }, [register, loginResponse, loginError, user, token])

    const responseGoogleSuccess = (r) => {
        console.log(r);
        dispatch(loginSSO({
            provider : "GOOGLE",
            uid: r.googleId,
            email : r.profileObj.email,
            name : r.profileObj.name,
            token : r.tokenId
        }));
      }
    
      const responseGoogleError = (response) => {
          console.log(response);
          Swal.fire({
            title: "Login Failed!",
            text: "There was an error signing you in with Google. Try again!",
            icon: "error",
            confirmButtonText: "Ok",
          });
    
      }
    
      const recaptchaRef = React.createRef();


      const loginContext ={
        responseGoogleError,
        responseGoogleSuccess,
        register,
        handleSubmit,
        onSubmit,
        loggingIn,
        loginResponse,
        user,
        token,
        recaptchaRef
      }

      function renderLoginForm(){
        if(form == 'mfa'){
            return <FormLoginMfa/>
        }
        return <FormLogin/>
    }

    return (
        <PageContext.Provider value={props}>
            <LoginContext.Provider value={loginContext}>
            <Layout>
                <div className="bg-light">
                <div className="navbar-container">
                    <nav className="navbar navbar-expand-lg  navbar-light" data-overlay>
                        <div className="container">
                            <a className="navbar-brand navbar-brand-dynamic-color fade-page text-center" href="/">
                                <img alt="Shipz" src="/images/logo-dark.png" style={{ maxHeight: '28px' }} />
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


                <div data-overlay className="min-vh-100 bg-light d-flex flex-column justify-content-md-center" style={{ 'paddingTop': '100px' }}>
                    <section className="py-3">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="card card-body shadow">
                                        {renderLoginForm()}
                                    </div>
                                    <div className="text-center text-small mt-3">
                                        Don't have an account? <a href="/signup">Sign up here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="divider divider-bottom bg-primary-3"></div>
                </div>
            </Layout>
            </LoginContext.Provider>
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

Login.defaultProps = {
    title: 'Sign In'
}