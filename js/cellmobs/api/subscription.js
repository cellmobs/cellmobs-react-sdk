import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listSubscriptions = async (params) => {
    return axios.get(`${API_BASE_URL}/subscription/list`, { params: params })
}

export const saveSubscription = async (subscription) => {
    return axios.post(`${API_BASE_URL}/subscription/item`, subscription)
}

export const getSubscription = async () => {
    return axios.get(`${API_BASE_URL}/subscription/me`)
}

export const cancelSubscription = async (id) => {
    return axios.delete(`${API_BASE_URL}/subscription/item/${id}`)
}


