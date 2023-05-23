
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { faLockAlt } from '@fortawesome/pro-duotone-svg-icons'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCircleNotch } from "@fortawesome/pro-light-svg-icons";
import { configureMfa, updatePassword, verifyMfa } from 'js/cellmobs/api/auth';
import { SET_USER } from '../redux/types/authTypes';
import Swal from "sweetalert2";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";

const schema = yup.object({
  currentPassword: yup.string().required('Please enter your current password'),
  password: yup.string().required('Please enter a new password')
    .min(8, 'Your password is too short.')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/i, 'Password does not meet the minimum requirements.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

export default function AccountPassword(props) {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const user = useSelector(state => state.auth.user);
  const fetching = useSelector(state => state.auth.fetching);

  const [isUsing2FA, setIsUsing2FA] = useState(user?.using2FA)
  const [qrCodeUrl, setQrCodeUrl] = useState("")


  async function onSubmit(data) {
    console.log(data);
    const res = await updatePassword({
      current: data.currentPassword,
      new: data.password,
      id: user.id
    })
    console.log(res)
    if (res.email) {      
      dispatch({ type: SET_USER, payload: res })
      Swal.fire({
        title: 'Success!',
        text: 'Your password was changed successfully!',
        icon: 'info',
        confirmButtonText: 'Ok'
      })

    } else {
      Swal.fire({
        title: 'Sorry!',
        html: 'Password update failed. Please try again or <a href="/forgot-password">reset your password</a>!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    }
  }

  async function handleCodeSubmit(e) {
    e.preventDefault();
    let code = document.getElementById('mfa-code').value;
    console.log(code);

    const res = await verifyMfa({
      email: user.email,
      code: code,
      type: 'authenticator'
    })

    if (res) {
      Swal.fire({
        title: 'Success!',
        text: 'Two Factor Authentication is now enabled!',
        icon: 'info',
        confirmButtonText: 'Ok'
      })
      setIsUsing2FA(true)
      let localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
      localUser.using2FA = true;
      let localUserString  = JSON.stringify(localUser);
      localStorage.setItem('user', localUserString);
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Sorry, the verification failed. Please try again!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      setIsUsing2FA(false)
    }
    //dispatch({ type: SET_USER, payload: res })
  }


  async function toggle2FA(e) {
    if(e.target.checked){
      let mfaPanel = document.getElementById('mfa-panel');
      if(mfaPanel) mfaPanel.hidden=false
    }
    const res = await configureMfa({
      enable: e.target.checked,
      type: "authenticator"
    })
    setQrCodeUrl(res);
    console.log(e.target.checked)

    if(e.target.checked == false){
      let localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
      localUser.using2FA = false;
      let localUserString  = JSON.stringify(localUser);
      localStorage.setItem('user', localUserString);
    }
  }


  useEffect(() => {
    let mfaPanel = document.getElementById('mfa-panel');
    if(mfaPanel) mfaPanel.hidden=true
  
  }, [user])

  return (

    <div className='col'>

      <h2 className="display-6">
        <FontAwesomeIcon icon={faLockAlt} size="1x" color="#9c0d14" className="mr-3" />
        Password</h2>
      <p>
        Password and 2FA
      </p>
      <form>
        <div className="form-group">
          <small>Current Password</small>
          <input type="password" {...register('currentPassword', { required: true })} autoCapitalize="none"
            className="form-control" placeholder="Your current password" />
          <small className="form-error">{errors.currentPassword?.message}</small>
        </div>
        <div className="form-group">
          <small>New Password</small>
          <input type="password" {...register('password', { required: true })} autoCapitalize="none"
            className="form-control" placeholder="Enter new password" />
          <small className="form-error">{errors.password?.message}</small>
        </div>
        <div className="form-group mb-4">
          <small>Confirm Password</small>
          <input type="password" {...register('confirmPassword')} autoCapitalize="none" className="form-control" placeholder="Confirm Password" />
          <small className="form-error">{errors.confirmPassword?.message}</small>
        </div>

        <button className="btn btn-primary btn-block col-sm-3 mb-5" type="submit" onClick={handleSubmit(onSubmit)}>
          Save
          {fetching &&
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
          }
        </button>

      </form>

      <h4>Two-Factor Authentication</h4>
      <div className="form-group mb-5" >
        {isUsing2FA ?
          <div className="form-group mt-5">
            <div className="custom-control custom-checkbox text-small">
              <input type="checkbox" className="custom-control-input" id="using-2fa" value="true" defaultChecked={isUsing2FA} onChange={toggle2FA} />
              <label className="custom-control-label h6" htmlFor="using-2fa">Two-Factor Authentication Enabled (Click to disable)</label>
            </div>
          </div> :
          <>
            <div className="form-group mt-5">
              <div className="custom-control custom-checkbox text-small">
                <input type="checkbox" className="custom-control-input" id="using-2fa" value="true" defaultChecked={isUsing2FA} onChange={toggle2FA} />
                <label className="custom-control-label h6" htmlFor="using-2fa">Click to enable</label>
              </div>
            </div>
            <div id="mfa-panel">
              <h5 className="mt-4">Step 1</h5>
              <p>Download the <strong>Google Authenticator</strong> app from the <a href="https://apps.apple.com/us/app/google-authenticator/id388497605">Apple App Store</a> or
                from <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US" target="_blank">Google Play</a>.
              </p>
              <p>
                Install the app and use it to scan the QR Code below.
              </p>
              <p className="mb-4">
                <img src={qrCodeUrl} />
              </p>

              <form>
                <div className="form-group mb-4">
                  <h5 className="mt-2">Step 2</h5>
                  <p>Enter authenticator code to confirm.</p>
                  <input type="text" autoCapitalize="none" className="form-control col-sm-6" placeholder="Enter code" id="mfa-code" />
                </div>
                <button className="btn btn-primary btn-block col-sm-3 mb-5" type="submit" onClick={handleCodeSubmit} >
                  Submit
                  {fetching &&
                    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
                  }
                </button>
              </form>
            </div>
          </>}
      </div>

    </div>


  )
}