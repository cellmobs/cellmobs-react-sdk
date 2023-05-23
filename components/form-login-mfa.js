import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { useContext, useEffect, useRef, useState } from "react";
import GoogleLogin from 'react-google-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import LoginContext from "./login-context";
import { GOOGLE_API_CLIENT_ID } from "../js/cellmobs/constants";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ERROR, LOGIN_RESPONSE } from "../redux/types/authTypes";
import { useForm } from "react-hook-form";
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';
import { verifyMfa } from 'js/cellmobs/api/auth';
import { ref } from "yup";
import Swal from "sweetalert2";

export default function FormLoginMfa() {

  const { token, loginResponse } = useContext(LoginContext)

  const AuthInputRef = useRef(null);

  const dispatch = useDispatch();
  let router = useRouter();

  const { register, handleSubmit } = useForm();
  const [loggingIn, setLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState(false)

  //let loginError = useSelector(state => state.auth.error);

  const handleOnChange = async (res) => {
    console.log(res);
    if (res.toString().length == 6) {
      let mfaResponse = await verifyMfa({
        email: loginResponse.identity.email,
        code: res,
        type: 'authenticator'
      })
      console.log(mfaResponse)
      if (mfaResponse == true) {
        dispatch({type: LOGIN_RESPONSE, payload: loginResponse});
        router.push("/");
        return;
      }else{
        AuthInputRef.current?.clear()
        setLoggingIn(false)
        setLoginError(true)
      }
    }
  }

  // async function onSubmit(data) {
  //   setLoggingIn(true)
  //   let mfaResponse = await verifyMfa({
  //     email: user.email,
  //     code: data.code,
  //     type: 'authenticator'
  //   })
  //   console.log(mfaResponse)
  //   if (mfaResponse == true) {
  //     router.push("/");
  //     return;
  //   }
  // }

  useEffect(() => {
    if (loginError && loginError != null) {
      Swal.fire({
        title: 'Login Failed!',
        text: 'Invalid code. Try again!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      dispatch({ type: LOGIN_ERROR, payload: null });
      setLoggingIn(false)
    }
  }, [register, loginError, token])

  return (
    <>
      <h1 className="h5 text-center">Two-Factor Authentication</h1>
      <p className="text-center">
        Enter a code from your Authenticator app.
      </p>
      <AuthCode
        containerClassName="auth-code"
        inputClassName="auth-code-input"
        autoFocus={true}
        allowedCharacters='numeric'
        ref={AuthInputRef}
        onChange={handleOnChange} />
      {/* <form action="/login" method="post">
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
      </form> */}
    </>
  )
}