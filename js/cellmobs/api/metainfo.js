import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listMetaInfo = async (params) => {
    return axios.get(`${API_BASE_URL}/metainfo/list`, { params: params })
}

export const saveMetaInfo = async (MetaInfo) => {
    return axios.post(`${API_BASE_URL}/metainfo/item`, MetaInfo)
}

export const getMetaInfo = async (id) => {
    return axios.get(`${API_BASE_URL}/metainfo/item/${id}`)
}

export const cloneMetaInfo = async (id) => {
    return axios.put(`${API_BASE_URL}/metainfo/item/${id}`)
}

export const deleteMetaInfo = async (id) => {
    return axios.delete(`${API_BASE_URL}/metainfo/item/${id}`)
}