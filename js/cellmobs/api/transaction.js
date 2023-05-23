import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listTransactions = async (params) => {
    return axios.get(`${API_BASE_URL}/transaction/list`, { params: params })
}

export const saveTransaction = async (transaction) => {
    return axios.post(`${API_BASE_URL}/transaction/item`, transaction)
}

export const getTransaction = async (id) => {
    return axios.get(`${API_BASE_URL}/transaction/item/${id}`)
}

export const cloneTransaction = async (id) => {
    return axios.put(`${API_BASE_URL}/transaction/item/${id}`)
}

export const deleteTransaction = async (id) => {
    return axios.delete(`${API_BASE_URL}/transaction/item/${id}`)
}

