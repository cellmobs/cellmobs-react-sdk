import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { SET_USER, SET_TOKEN } from "../redux/types/authTypes";
import { faBars, faUser, faWindowClose } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cookie from 'js-cookie';

export default function Navbar({ title, logo, text }) {

    const dispatch = useDispatch();
    const router = useRouter();

    let user = useSelector(state => state.auth.user);

    const logoutHandler = () => {
        localStorage.removeItem('user');
        Cookie.remove('cmauth')
        dispatch({ type: SET_TOKEN, payload: null });
        dispatch({ type: SET_USER, payload: null });
        router.push("/");
    }

    return (
        <div className="navbar-container">
            <nav className={'navbar navbar-expand-lg navbar-' + text} data-overlay>
                <div className="container">
                    <a className="navbar-brand navbar-brand-dynamic-color fade-page" href="/">
                        <img
                            src={'/images/logo-' + logo + '.png'}
                            alt={title}
                            width={200} height={29.2}
                        />
                    </a>
                    {user != null && user.id ? (
                        <div className="d-flex align-items-center order-lg-3">
                            <a href="/account" className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block">
                                <FontAwesomeIcon icon={faUser} size="1x" className="mt-1" alt="Account" /></a>
                            <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                                <FontAwesomeIcon icon={faBars} size="1x" className="mt-1" />
                            </button>
                        </div>) : (
                        <div className="d-flex align-items-center order-lg-3">
                            <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                                <FontAwesomeIcon icon={faBars} size="1x" className="mt-1" />
                            </button>
                        </div>
                    )}
                    <div className={'collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end bg-menu-'+text} id="navigation-menu" >
                        <ul className="navbar-nav my-3 my-lg-0">

                            {/* <li className="nav-item mr-4">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="/about" role="button">About</a>
                                </div>
                            </li> */}
                            <li className="nav-item mr-4">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="/platform" role="button">Platform</a>
                                </div>
                            </li>
                            <li className="nav-item mr-4">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="/pricing" role="button">Pricing</a>
                                </div>
                            </li>
                            {user == null ? (
                                <li className="nav-item mr-4">
                                    <div className="dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="/developers" role="button">Developers</a>
                                    </div>
                                </li>
                            ) : ''}
                            {user != null && user.id ? (
                                <li className="nav-item mr-4">
                                    <div className="dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="https://docs.cellmobs.com/getting-started/" role="button">Docs</a>
                                    </div>
                                </li>
                            ) : ''}

                            {user == null ? (
                                <li className="nav-item mr-4">
                                    <div className="dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="/login" role="button">Sign In</a>
                                    </div>
                                </li>
                            ) : ''}
                            {user != null && user.id ? (
                                <li className="nav-item mr-4">
                                    <div className="dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="nav-link nav-item" data-toggle="dropdown-grid" href="#" onClick={logoutHandler} role="button">Sign Out</a>
                                    </div>
                                </li>
                            ) : ''}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

