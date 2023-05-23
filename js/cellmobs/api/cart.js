import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listCarts = async (params) => {
    return axios.get(`${API_BASE_URL}/cart/list`, { params: params })
}

export const saveCart = async (cart) => {
    return axios.post(`${API_BASE_URL}/cart/item`, cart)
}

export const getCart = async (id) => {
    return axios.get(`${API_BASE_URL}/cart/item/${id}`)
}

export const cloneCart = async (id) => {
    return axios.put(`${API_BASE_URL}/cart/item/${id}`)
}

export const deleteCart = async (id) => {
    return axios.delete(`${API_BASE_URL}/cart/item/${id}`)
}

