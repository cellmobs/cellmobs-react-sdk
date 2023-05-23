import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listTags = async (params) => {
    return axios.get(`${API_BASE_URL}/tag/list`, { params: params })
}

export const saveTag = async (tag) => {
    return axios.post(`${API_BASE_URL}/tag/item`, tag)
}

export const getTag = async (tagString) => {
    return axios.get(`${API_BASE_URL}/tag/item/${tagString}`)
}

export const cloneTag = async (tagString) => {
    return axios.put(`${API_BASE_URL}/tag/item/${tagString}`)
}

export const deleteTag = async (tagString) => {
    return axios.delete(`${API_BASE_URL}/tag/item/${tagString}`)
}

