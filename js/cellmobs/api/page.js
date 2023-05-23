import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL, HOST_NAME } from '../constants';

export const listPages = async (params) => {
    return axios.get(`${API_BASE_URL}/page/list`, { params: params })
}

export const savePage = async (page) => {
    return axios.post(`${API_BASE_URL}/page/item`, page)
}

export const getPage = async (id) => {
    return axios.get(`${API_BASE_URL}/page/item/${id}`)
}

export const renderPage = async (path, host) => {
    return axios.get(`${API_BASE_URL}/page/render-page?host=${host ?? HOST_NAME}&path=${path}`)
}

export const clonePage = async (id) => {
    return axios.put(`${API_BASE_URL}/page/item/${id}`)
}

export const deletePage = async (id) => {
    return axios.delete(`${API_BASE_URL}/page/item/${id}`)
}

