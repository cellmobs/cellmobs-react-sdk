import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listWorks = async (params) => {
    return axios.get(`${API_BASE_URL}/work/list`, { params: params })
}

export const saveWork = async (work) => {
    return axios.post(`${API_BASE_URL}/work/item`, work)
}

export const getWork = async (id) => {
    return axios.get(`${API_BASE_URL}/work/item/${id}`)
}

export const cloneWork = async (id) => {
    return axios.put(`${API_BASE_URL}/work/item/${id}`)
}

export const deleteWork = async (id) => {
    return axios.delete(`${API_BASE_URL}/work/item/${id}`)
}

