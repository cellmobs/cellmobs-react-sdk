import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listAccounts = async (params) => {
    return axios.get(`${API_BASE_URL}/identity/account/list`, { params: params })
}

export const saveAccount = async (account) => {
    return axios.post(`${API_BASE_URL}/identity/account/item`, account)
}

export const getAccount = async (id) => {
    return axios.get(`${API_BASE_URL}/identity/account/item/${id}`)
}

export const cloneAccount = async (id) => {
    return axios.put(`${API_BASE_URL}/identity/account/item/${id}`)
}

export const deleteAccount = async (id, success, failure) => {
    return axios.delete(`${API_BASE_URL}/identity/account/item/${id}`)
}

export const setPrimaryAccount = async (params) => {
    return axios.post(`${API_BASE_URL}/identity/account/primary`,null,{ params: params })
}

