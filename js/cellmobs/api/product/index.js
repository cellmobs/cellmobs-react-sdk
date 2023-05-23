import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listProducts = async (params) => {
    return axios.get(`${API_BASE_URL}/product/list`, { params: params })
}

export const saveProduct = async (product) => {
    return axios.post(`${API_BASE_URL}/product/item`, product)
}

export const getProduct = async (id) => {
    return axios.get(`${API_BASE_URL}/product/item/${id}`)
}

export const cloneProduct = async (id) => {
    return axios.put(`${API_BASE_URL}/product/item/${id}`)
}

export const deleteProduct = async (id) => {
    return axios.delete(`${API_BASE_URL}/product/item/${id}`)
}