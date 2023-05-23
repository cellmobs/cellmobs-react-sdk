import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listFeatures = async (params) => {
    return axios.get(`${API_BASE_URL}/product/feature/list`, { params: params })
}

export const saveFeature = async (feature) => {
    return axios.post(`${API_BASE_URL}/product/feature/item`, feature)
}

export const getFeature = async (id) => {
    return axios.get(`${API_BASE_URL}/product/feature/item/${id}`)
}

export const cloneFeature = async (id) => {
    return axios.put(`${API_BASE_URL}/product/feature/item/${id}`)
}

export const deleteFeature = async (id) => {
    return axios.delete(`${API_BASE_URL}/product/feature/item/${id}`)
}