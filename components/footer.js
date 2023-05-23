import Image from "next/image";
import { faCaretUp } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from 'react';
import PageContext from './page-context';
import { useSelector } from "react-redux";
import { API_REFERENCE_URL } from "js/cellmobs/constants";
import CookieConsent from "react-cookie-consent";

export default function Footer() {

    let user = useSelector(state => state.auth.user);

    return (
        <div>
            <footer className="bg-primary-3 text-white links-white pb-0 footer-1" style={{paddingTop:'4rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-auto mr-xl-5 col-md-4 mb-4 mb-md-0">
                            <h5>About</h5>
                            <ul className="nav flex-row flex-md-column">
                                <li className="nav-item mr-3 mr-md-0">
                                    <a href="/platform" className="nav-link fade-page px-0 py-2">Platform</a>
                                </li>
                                <li className="nav-item mr-3 mr-md-0">
                                    <a href="/blog" className="nav-link fade-page px-0 py-2">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-auto mr-xl-5 col-md-4 mb-4">
                            <h5>Support</h5>
                            <ul className="nav flex-row flex-md-column">
                                <li className="nav-item mr-3 mr-md-0">
                                    <a href="/support" className="nav-link fade-page px-0 py-2">Help Center</a>
                                </li>
                                <li className="nav-item mr-3 mr-md-0">
                                    <a href="/developers" className="nav-link fade-page px-0 py-2">Developers</a>
                                </li>
                                <li className="nav-item mr-3 mr-md-0">
                                    <a href="/pricing" className="nav-link fade-page px-0 py-2">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-auto mr-xl-5 col-md-4 mb-4">
                            <h5>Developers</h5>
                            <ul className="list-inline  list-unstyled">
                            {user == null ? (
                                <li className="nav-item mr-4 mr-md-0">
                                        <a href="/developers" className="nav-link fade-page px-0 py-2">Sign-up for Free</a>
                                    </li>
                        ) : ''}
                            {user != null && user.id ? (
                                    <>
                                    <li className="nav-item mr-4 ">
                                        <a href="/account" className="nav-link fade-page px-0 py-2">Account</a>
                                    </li>
                                    </>
                            ) : ''}
                                <li className="nav-item mr-4 ">
                                    <a href="https://docs.cellmobs.com/getting-started/" className="nav-link fade-page px-0 py-2">Docs</a>
                                </li>
                                <li className="nav-item mr-4 ">
                                    <a href={API_REFERENCE_URL} className="nav-link fade-page px-0 py-2">API</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <hr />
                        </div>
                    </div>
                    <div className="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
                        <div className="col-auto">
                            <div className="d-flex flex-column flex-sm-row align-items-center text-small">
                                <div className="text-muted">&copy; {(new Date()).getFullYear()} Cellmobs, Inc. - <a href="/privacy">Privacy Policy</a> | <a href="/terms" target="_blank">Terms of Service</a> | <a href="/gdpr">GDPR</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto mt-3 mt-lg-0">
                            {/* <ul className="list-unstyled d-flex mb-0">
                                <li className="mx-3">
                                    <a href="#" className="hover-fade-out">
                                        <img src="/assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs bg-white" data-inject-svg />
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a href="#" className="hover-fade-out">
                                        <img src="/assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs bg-white" data-inject-svg />
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a href="#" className="hover-fade-out">
                                        <img src="/assets/img/icons/social/facebook.svg" alt="Facebook" className="icon icon-xs bg-white" data-inject-svg />
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a href="#" className="hover-fade-out">
                                        <img src="/assets/img/icons/social/google.svg" alt="Google" className="icon icon-xs bg-white" data-inject-svg />
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </footer>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="canStoreCookies"
                style={{ background: 'var(--primary)' }}
                buttonStyle={{ backgroundColor: 'var(--primary-3)', color: 'white', fontSize: "13px", marginRight: "100px"}}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
          </CookieConsent>


            <a href="#top" className="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
                <FontAwesomeIcon icon={faCaretUp} height={22} color="#fff" />
            </a>

        </div>
    )
}