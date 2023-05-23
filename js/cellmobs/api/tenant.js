import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listTenants = async (params) => {
    return axios.get(`${API_BASE_URL}/tenant/list`, { params: params })
}

export const saveTenant = async (organization) => {
    return axios.post(`${API_BASE_URL}/tenant/item`, organization)
}

export const getTenant = async (id) => {
    return axios.get(`${API_BASE_URL}/tenant/item/${id}`)
}

export const deleteTenant = async (id) => {
    return axios.delete(`${API_BASE_URL}/tenant/item/${id}`)
}

export const verifyTenant = async (id, domain) => {
    return axios.get(`${API_BASE_URL}/tenant/dns/verify/${id}?domain=${domain}`)
}