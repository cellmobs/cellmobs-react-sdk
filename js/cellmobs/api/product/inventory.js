import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listInventories = async (params) => {
    return axios.get(`${API_BASE_URL}/product/inventory/list`, { params: params })
}

export const saveInventory = async (inventory) => {
    return axios.post(`${API_BASE_URL}/product/inventory/item`, inventory)
}

export const getInventory = async (id) => {
    return axios.get(`${API_BASE_URL}/product/inventory/item/${id}`)
}

export const cloneInventory = async (id) => {
    return axios.put(`${API_BASE_URL}/product/inventory/item/${id}`)
}

export const deleteInventory = async (id) => {
    return axios.delete(`${API_BASE_URL}/product/inventory/item/${id}`)
}