import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listApiKey = async (params) => {
    return axios.get(`${API_BASE_URL}/tenant/apikey/list`, { params: params })
}

export const generateApiKey = async (params) => {
    return axios.post(`${API_BASE_URL}/tenant/apikey/generate?${new URLSearchParams( params).toString()}`,)
}

export const getApiKey = async (id) => {
    return axios.get(`${API_BASE_URL}/tenant/apikey/item/${id}`)
}

export const deleteApiKey = async (id) => {
    return axios.delete(`${API_BASE_URL}/tenant/apikey/item/${id}`)
}