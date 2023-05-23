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
  company: yup.string().max(255, 'Company name cannot be longer than 255 characters'),
  name: yup.string().required('Please enter your  ame'),
  email: yup.string().required('Please enter your email address')
    .email("Is not a valid email address"),
  companySize: yup.string().required('Please select a company size'),
  budget: yup.string().required('Please select your estimated budget size'),
}).required();

export default function FormContact({ leadSource }) {

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
        text: 'Someone will be in touch with you shortly. We appreciate your interest in Cellmobs!',
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
      <div className="col-xl-5 col-lg-6 col-md-7">
        <div className="card card-body shadow">
          <form action="/v1/auth/contact-request" method="post" data-form-email noValidate className="text-dark">
            <input type="hidden" defaultValue={leadSource} required {...register('leadSource')} />
            <div className="form-group">
              <label htmlFor="demo-name" >Your Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required {...register('name')} />
              <small className="form-error">{errors.name?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="demo-name" >Company Name</label>
              <input type="text" className="form-control" placeholder="Company Name" required {...register('company')} />
              <small className="form-error">{errors.company?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="demo-email">Email Address</label>
              <input type="email" className="form-control" placeholder="you@yoursite.com" required {...register('email')} />
              <small className="form-error">{errors.email?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="demo-company-size">Company Size</label>
              <div className="position-relative">
                <select className="custom-select" required {...register('companySize')}>
                  <option value="">Select an option</option>
                  <option value="1-50">1-50</option>
                  <option value="50-500">50-500</option>
                  <option value="500+">500+</option>
                </select>
                <img src="assets/img/icons/interface/icon-caret-down.svg" alt="Arrow Down" className="icon icon-sm" />
                <small className="form-error">{errors.companySize?.message}</small>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="demo-budget">Approximate Budget</label>
              <div className="position-relative">
                <select className="custom-select" required {...register('budget')}>
                  <option value="">Select an option</option>
                  <option value="Up to $10k">Up to $10k</option>
                  <option value="$10k - $50k">$10k - $50k</option>
                  <option value="Over $50k">Over $50k</option>
                </select>
                <img src="assets/img/icons/interface/icon-caret-down.svg" alt="Arrow Down" className="icon icon-sm" />
                <small className="form-error">{errors.budget?.message}</small>
              </div>
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
            {/* <div data-recaptcha data-sitekey={RECAPTCHA_SITEKEY} data-size="invisible" data-badge="bottomleft"></div> */}
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