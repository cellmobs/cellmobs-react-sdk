import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listPollResponses = async (params) => {
    return axios.get(`${API_BASE_URL}/poll/response/list`, { params: params })
}

export const savePollResponse = async (poll) => {
    return axios.post(`${API_BASE_URL}/poll/response/item`, poll)
}

export const getPollResponse = async (id) => {
    return axios.get(`${API_BASE_URL}/poll/response/item/${id}`)
}

export const clonePollResponse = async (id) => {
    return axios.put(`${API_BASE_URL}/poll/response/item/${id}`)
}

export const deletePollResponse = async (id) => {
    return axios.delete(`${API_BASE_URL}/poll/response/item/${id}`)
}

