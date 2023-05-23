import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listPolls = async (params) => {
    return axios.get(`${API_BASE_URL}/poll/list`, { params: params })
}

export const savePoll = async (poll) => {
    return axios.post(`${API_BASE_URL}/poll/item`, poll)
}

export const getPoll = async (id) => {
    return axios.get(`${API_BASE_URL}/poll/item/${id}`)
}

export const clonePoll = async (id) => {
    return axios.put(`${API_BASE_URL}/poll/item/${id}`)
}

export const deletePoll = async (id) => {
    return axios.delete(`${API_BASE_URL}/poll/item/${id}`)
}