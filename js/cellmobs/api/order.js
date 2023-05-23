import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listOrders = async (params) => {
    return axios.get(`${API_BASE_URL}/order/list`, { params: params })
}

export const saveOrder = async (order) => {
    return axios.post(`${API_BASE_URL}/order/item`, order)
}

export const getOrder = async (id) => {
    return axios.get(`${API_BASE_URL}/order/item/${id}`)
}

export const cloneOrder = async (id) => {
    return axios.put(`${API_BASE_URL}/order/item/${id}`)
}

export const deleteOrder = async (id) => {
    return axios.delete(`${API_BASE_URL}/order/item/${id}`)
}

export const currentCharges = async () => {
    return axios.get(`${API_BASE_URL}/subscription/current-charges`)
}

