import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listConnections = async (params) => {
    return axios.get(`${API_BASE_URL}/identity/connection/list`, { params: params })
}

export const saveConnection = async (connection) => {
    return axios.post(`${API_BASE_URL}/identity/connection/item`, connection)
}

export const getConnection = async (id) => {
    return axios.get(`${API_BASE_URL}/identity/connection/item/${id}`)
}

export const cloneConnection = async (id) => {
    return axios.put(`${API_BASE_URL}/identity/connection/item/${id}`)
}

export const deleteConnection = async (id) => {
    return axios.delete(`${API_BASE_URL}/identity/connection/item/${id}`)   
}