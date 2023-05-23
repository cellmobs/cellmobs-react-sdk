import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listIdentities = async (params) => {
    return axios.get(`${API_BASE_URL}/identity/list`, { params: params })
}

export const saveIdentity = async (identity) => {
    return axios.post(`${API_BASE_URL}/identity/item`, identity)
}

export const getIdentity = async (id) => {
    return axios.get(`${API_BASE_URL}/identity/item/${id}`)
}

export const cloneIdentity = async (id) => {
    return axios.put(`${API_BASE_URL}/identity/item/${id}`)
}

export const deleteIdentity = async (id) => {
    return axios.delete(`${API_BASE_URL}/identity/item/${id}`)
}

