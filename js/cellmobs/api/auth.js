import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const login = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/login`, null, { params: params })
}

export const loginSSO = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/login-sso`, null, { params: params })
}

export const passwordPasswordReset = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/password-request`, { params: params })
}

export const resetPassword = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/password-save`, null, { params: params })
}
