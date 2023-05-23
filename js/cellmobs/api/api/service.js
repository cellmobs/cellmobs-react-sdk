import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listIntegrations = async (params) => {
    return axios.get(`${API_BASE_URL}/api/service/list`, { params: params })
}

export const saveIntegration = async (response) => {
    return axios.post(`${API_BASE_URL}/api/service/item`, product)
}

export const getIntegration = async (id) => {
    return axios.get(`${API_BASE_URL}/api/service/item/${id}`)
}

export const cloneIntegration = async (id) => {
    return axios.put(`${API_BASE_URL}/api/service/item/${id}`)
}

export const deleteIntegration = async (id) => {
    return axios.delete(`${API_BASE_URL}/api/service/item/${id}`)
}

