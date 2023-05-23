import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listPrices = async (params) => {
    return axios.get(`${API_BASE_URL}/product/price/list`, { params: params })
}

export const savePrice = async (price) => {
    return axios.post(`${API_BASE_URL}/product/price/item`, price)
}

export const getPrice = async (id) => {
    return axios.get(`${API_BASE_URL}/product/price/item/${id}`)
}

export const clonePrice = async (id) => {
    return axios.put(`${API_BASE_URL}/product/price/item/${id}`)
}

export const deletePrice = async (id) => {
    return axios.delete(`${API_BASE_URL}/product/price/item/${id}`)
}