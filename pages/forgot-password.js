import { useEffect, useMemo, useState } from 'react';
import { passwordResetRequest } from '../redux/actions/authActions';
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
import { renderPage } from 'js/cellmobs/api/page';
import { faBars, faWindowClose } from '@fortawesome/pro-light-svg-icons'

export async function getServerSideProps(context) {
    const page = await renderPage('/forgot-password')
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

export default function ForgotPassword(props) {

    const dispatch = useDispatch();
    let router = useRouter();

    const { register, handleSubmit } = useForm();

    let passwordError = useSelector(state => state.auth.error);
    let passwordRequest = useSelector(state => state.auth.passwordRequest);
    let fetching = useSelector(state => state.auth.fetching);

    async function onSubmit(data) {
        console.log(data)
        dispatch(passwordResetRequest(data));
    }

    //console.log('login: ' + loginError);

    useEffect(() => {
        register('email');
        if (passwordError && passwordError != null) {
            /*
                Consolidate into an central Error handler
                https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux
            */
            Swal.fire({
                title: 'Sorry!',
                text: 'We could not find an account with this email. Try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            dispatch({ type: PASSWORD_ERROR, payload: null });
        }
        

    }, [register])

    useMemo(() => {

        console.log(passwordRequest)
        if(!passwordRequest) return;

        Swal.fire({
                        title: 'Thanks',
                        text: 'Please check your email to reset your password!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
    },[passwordRequest])

    useMemo(() => {

        console.log(passwordError)
        if(!passwordError) return;

        Swal.fire({
            title: 'Sorry!',
            text: 'We could not find an account with this email. Try again!',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
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

                <div data-overlay className="min-vh-100 bg-light d-flex flex-column justify-content-md-center section-image" style={{'paddingTop':'100px'}}>

                    <section className="py-3" section="main">

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="card card-body shadow">
                                        <h1 className="h5 text-center">Reset Password</h1>
                                        <form id="password-request">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" required="required" placeholder="Email Address" autoCapitalize="none" autoFocus={true} id="email" {...register('email')} />
                                            </div>
                                            <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit(onSubmit)}>Send Reset Link
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

ForgotPassword.defaultProps = {
    title: 'Forgot Password'
}