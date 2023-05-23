import https from 'https';
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode'
import { X_API_KEY, X_TENANTID } from '../constants';

function jwtIsValid(jwt) {
  if (!jwt) return false
  var { exp } = jwtDecode(jwt)
  var now = new Date()
  if (exp < Math.floor(now.getTime()/1000)) {
      return false
  }
  return true
}

export default function Axios(cookies) {
  if (!cookies) {
    cookies = typeof window != 'undefined' ? new Cookies() : {get(){},set(){}}
  }

  axios.defaults.headers.common['X-Api-Key'] = X_API_KEY
  axios.defaults.headers.common['X-TenantID'] = X_TENANTID

  const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      withCredentials: true
  });

  instance.interceptors.request.use(function (config) {
    const jwt = cookies.get('cmauth');
    if (jwtIsValid(jwt)) {
      config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
  })

  instance.interceptors.response.use(function (response) {
    return response.data
  }, function (error) {
    if (error.response && error.response.status == 403 && !window.location.href.includes('/login')) {
      window.location.href = `/login?returnUrl=${window.location.pathname}`
    }
    return error
  })

  return instance
}