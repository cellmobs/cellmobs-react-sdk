import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const login = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/login`, null, { params: params })
}

export const passwordPasswordReset = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/password-request`, { params: params })
}

export const resetPassword = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/password-save`, null, { params: params })
}

export const updatePassword = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/password-update`, null, { params: params })
}

export const checkEmail = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/check-email`, { params: params })
}

export const checkMfa = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/check-mfa`, { params: params })
}

export const verifyMfa = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/verify-mfa`, { params: params })
}

export const configureMfa = async (params) => {
    return axios.get(`${API_BASE_URL}/auth/configure-mfa`, { params: params })
}

export const register = async (identity, params) => {
    return axios.post(`${API_BASE_URL}/auth/register`, identity, { params: params })
}

export const contactRequest  = async (params) => {
    return axios.post(`${API_BASE_URL}/auth/contact-request`, null, { params: params })
}

