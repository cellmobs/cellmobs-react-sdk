import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listInboxs = async (params) => {
    return axios.get(`${API_BASE_URL}/identity/inbox/list`, { params: params })
}

export const saveInbox = async (inbox) => {
    return axios.post(`${API_BASE_URL}/identity/inbox/item`, inbox)
}

export const getInbox = async (id) => {
    return axios.get(`${API_BASE_URL}/identity/inbox/item/${id}`)
}

export const cloneInbox = async (id) => {
    return axios.put(`${API_BASE_URL}/identity/inbox/item/${id}`)
}

export const deleteInbox = async (id) => {
    return axios.delete(`${API_BASE_URL}/identity/inbox/item/${id}`)
}

