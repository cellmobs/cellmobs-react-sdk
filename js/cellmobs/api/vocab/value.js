import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listValues = async (params) => {
    return axios.get(`${API_BASE_URL}/vocab/value/list`, { params: params })
}

export const saveValue = async (value) => {
    return axios.post(`${API_BASE_URL}/vocab/value/item`, value)
}

export const getValue = async (type) => {
    return axios.get(`${API_BASE_URL}/vocab/value/item/${type}`)
}

export const cloneValue = async (type) => {
    return axios.put(`${API_BASE_URL}/vocab/value/item/${type}`)
}

export const deleteValue = async (type) => {
    return axios.delete(`${API_BASE_URL}/vocab/value/item/${type}`)
}

