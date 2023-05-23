import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listTriggers = async (params) => {
    return axios.get(`${API_BASE_URL}/reward/trigger/list`, { params: params })
}

export const saveTrigger = async (trigger) => {
    return axios.post(`${API_BASE_URL}/reward/trigger/item`, trigger)
}

export const getTrigger = async (id) => {
    return axios.get(`${API_BASE_URL}/reward/trigger/item/${id}`)
}

export const cloneTrigger = async (id) => {
    return axios.put(`${API_BASE_URL}/reward/trigger/item/${id}`)
}

export const deleteTrigger = async (id) => {
    return axios.delete(`${API_BASE_URL}/reward/trigger/item/${id}`)
}

