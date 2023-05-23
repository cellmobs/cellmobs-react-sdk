import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listInvites = async (params) => {
    return axios.get(`${API_BASE_URL}/invite/list`, { params: params })
}

export const saveInvite = async (invite) => {
    return axios.post(`${API_BASE_URL}/invite/item`, invite)
}

export const getInvite = async (id) => {
    return axios.get(`${API_BASE_URL}/invite/item/${id}`)
}

export const cloneInvite = async (id) => {
    return axios.put(`${API_BASE_URL}/invite/item/${id}`)
}

export const deleteInvite = async (id) => {
    return axios.delete(`${API_BASE_URL}/invite/item/${id}`)
}

