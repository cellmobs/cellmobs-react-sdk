import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import React, { useContext, useState } from "react";
import { GOOGLE_API_CLIENT_ID, RECAPTCHA_SITEKEY } from "../js/cellmobs/constants";
import { contactRequest } from 'js/cellmobs/api/auth';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const schema = yup.object({
  name: yup.string().required('Please enter your name').max(255, 'Name cannot be longer than 255 characters'),
  email: yup.string().required('Please enter your email address')
    .email("Is not a valid email address").max(255, 'Email cannot be longer than 255 characters'),
  companySize: yup.string().required('Please select a company size'),
  budget: yup.string().required('Please select your estimated budget size'),
}).required();

export default function FormBeta({ leadSource }) {

  const recaptchaRef = React.createRef();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [fetching, setFetching] = useState(false)


  async function onSubmit(data) {
    setFetching(true)
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (recaptchaValue == '') {
      setFetching(false)

      Swal.fire({
        title: 'Sorry!',
        text: 'Incorrect re-Captcha value. Try again!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    data['g-recaptcha-response'] = recaptchaValue;
    console.log(data);
    let contactResponse = await contactRequest(data)
    console.log(contactResponse)

    setFetching(false)

    if (contactResponse.name) {
      Swal.fire({
        title: 'Thanks!',
        text: 'We will be in touch soon. We appreciate your interest in Cellmobs!',
        icon: 'info',
        confirmButtonText: 'Ok'
      })
    } else {
      Swal.fire({
        title: 'Oops!',
        text: "Sorry, something's not quite right. Please try again!",
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }


  // useEffect(() => {
  //   if (loginError && loginError != null) {
  //     Swal.fire({
  //       title: 'Login Failed!',
  //       text: 'Invalid code. Try again!',
  //       icon: 'error',
  //       confirmButtonText: 'Ok'
  //     })
  //     dispatch({ type: LOGIN_ERROR, payload: null });
  //     setLoggingIn(false)
  //   }
  // }, [register, loginError, token])


  return (
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-8 col-md-8">
        <div className="card card-body shadow">
          <form action="/v1/auth/contact-request" method="post" data-form-email noValidate className="text-dark">
            <input type="hidden" defaultValue={leadSource} required {...register('leadSource')} />
            <input type="hidden" defaultValue="n/a" required {...register('companySize')} />
            <input type="hidden" defaultValue="n/a" required {...register('company')} />
            <input type="hidden" defaultValue="n/a" required {...register('budget')} />
            <input type="hidden" defaultValue="BETA_REQUEST" required {...register('event')} />
            <div className="form-group">
              <label htmlFor="demo-name" >Your Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required {...register('name')} />
              <small className="form-error">{errors.name?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="demo-email">Email Address</label>
              <input type="email" className="form-control" placeholder="you@yoursite.com" required {...register('email')} />
              <small className="form-error">{errors.email?.message}</small>
            </div>
            <div className="d-none alert alert-success w-100 my-md-3" role="alert" data-success-message>
              Thanks, a member of our team will be in touch shortly.
            </div>
            <div className="d-none alert alert-danger w-100 my-md-3" role="alert" data-error-message>
              Please fill all fields correctly.
            </div>
            <div style={{justifyContent: 'center', display:'flex'}}>
              <ReCAPTCHA
                className="mb-4"
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITEKEY} />
            </div>
            <button className="btn btn-primary btn-block btn-loading" type="submit" onClick={handleSubmit(onSubmit)}>
              <span>Submit</span>
              {fetching &&
                <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}