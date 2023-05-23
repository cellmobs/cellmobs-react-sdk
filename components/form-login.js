import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { useContext } from "react";
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import LoginContext from "./login-context";
import { GOOGLE_API_CLIENT_ID } from "../js/cellmobs/constants";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITEKEY } from '../js/cellmobs/constants';

export default function FormLogin() {

  const { loggingIn, register, onSubmit, handleSubmit, responseGoogleError, responseGoogleSuccess, recaptchaRef } = useContext(LoginContext)

  return (
    <>
      <h1 className="h5 text-center">Sign In</h1>

      <form action="/login" method="post">
        <div className="form-group">
          <input type="email" autoCapitalize="none" autoFocus={true} id="username" {...register('username')} name="username"
            className="form-control" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="password" {...register('password')} id="password" autoCapitalize="none" name="password" className="form-control" placeholder="Password" />
          <div className="text-right text-small mt-2">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox text-small">
            <input type="checkbox" defaultChecked className="custom-control-input" value="true" name="remember" id="remember" {...register('remember')} />
            <label className="custom-control-label" htmlFor="remember">Remember me next time</label>
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
          Sign In
          {loggingIn &&
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
          }
        </button>

        <GoogleLogin
          clientId={GOOGLE_API_CLIENT_ID}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="btn btn-primary btn-block mt-4"
              style={{ 'backgroundColor': '#5086ec', 'border': '#5086ec' }}>
              {" "}
              <FontAwesomeIcon icon={faGoogle} /> Connect with Google
            </button>

          )}
          buttonText="Login"
          scope="profile email"
          isSignedIn={false}
          autoLoad={false}
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleError}
          cookiePolicy={'single_host_origin'}
        />

      </form>
    </>

  )
}