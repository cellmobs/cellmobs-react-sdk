import { useEffect, useState } from 'react';
import { login } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LOGIN_ERROR, LOGOUT } from '../redux/types/authTypes';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import Layout from 'layouts';
import PageContext from '../components/page-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { isError } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { verifyMfa } from 'js/cellmobs/api/auth';
import { faBars, faWindowClose } from '@fortawesome/pro-light-svg-icons'
import { jwtIsValid} from "js/cellmobs/common";
import Cookies from 'universal-cookie';
import { userAgent } from 'next/server';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export async function getServerSideProps({req}) {
    const page = await renderPage('/login-mfa')
    if (isError(page)) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
    const cookies = new Cookies(req.headers.cookie);
    if (!jwtIsValid(cookies.get('cmauth'))) {
      return {
        redirect: {
          destination: '/login' ,
          permanent: false,
        },
      };
    }
      return {
        props: {
            page: page,
            params: {}
        }
    }
}

export default function Mfa(props) {

    const dispatch = useDispatch();
    let router = useRouter();

    const { register, handleSubmit } = useForm();
    const [loggingIn, setLoggingIn] = useState(false)

    let user = useSelector(state => state.auth.user);
    let loginError = useSelector(state => state.auth.error);
    let token = useSelector(state => state.auth.token);
    let fetching = useSelector(state => state.auth.fetching);

    async function onSubmit(data) {
        setLoggingIn(true)
        //dispatch(login(data));
        let mfaResponse  = await verifyMfa({
            email: user.email, 
            code : data.code,
            type : 'authenticator'
        })
        console.log(mfaResponse)
        if(mfaResponse==true){
            router.push("/");
            return;
        }
    }

    //console.log('login: ' + loginError);

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
    }, [register, loginError, token])


    return (
        <PageContext.Provider value={props}>
            <Layout>
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
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="card card-body shadow">
                                        <h1 className="h5 text-center">Two-Factor Authentication</h1>
                                        <p className="text-center">
                                        Enter a code from your Authenticator app.
                                        </p>
                                        <form action="/login" method="post">
                                            <div className="form-group">
                                                <input type="code" autoCapitalize="none" autoFocus={true} id="code" {...register('code')}  
                                                    className="form-control" placeholder="Enter code" />
                                            </div>
                                            <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit(onSubmit)}>
                                                Verify 
                                                {loggingIn &&
                                                    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
                                                }
                                            </button>

                                        </form>
                                    </div>
                                    <div className="text-center text-small mt-3">
                                        Don't have an account? <a href="/signup">Sign up here</a>
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

Mfa.defaultProps = {
    title: 'Sign In'
}