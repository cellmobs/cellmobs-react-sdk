import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listSettings = async (params) => {
    return axios.get(`${API_BASE_URL}/oauth/settings/list`, { params: params })
}

export const saveSetting = async (oauth) => {
    return axios.post(`${API_BASE_URL}/oauth/settings/item`, oauth)
}

export const getSetting = async (id) => {
    return axios.get(`${API_BASE_URL}/oauth/settings/item/${id}`)
}

export const cloneSetting = async (id) => {
    return axios.put(`${API_BASE_URL}/oauth/settings/item/${id}`)
}

export const deleteSetting = async (id) => {
    return axios.delete(`${API_BASE_URL}/oauth/settings/item/${id}`)
}

