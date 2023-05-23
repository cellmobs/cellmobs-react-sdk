import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listContents = async (params) => {
    return axios.get(`${API_BASE_URL}/content/list`, { params: params })
}

export const saveContent = async (content) => {
    return axios.post(`${API_BASE_URL}/content/item`, content)
}

export const getContent = async (id) => {
    return axios.get(`${API_BASE_URL}/content/item/${id}`)
}

export const cloneContent = async (id) => {
    return axios.put(`${API_BASE_URL}/content/item/${id}`)
}

export const deleteContent = async (id) => {
    return axios.delete(`${API_BASE_URL}/content/item/${id}`)
}

