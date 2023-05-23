import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listRewards = async (params) => {
    return axios.get(`${API_BASE_URL}/reward/list`, { params: params })
}

export const saveReward = async (reward) => {
    return axios.post(`${API_BASE_URL}/reward/item`, reward)
}

export const getReward = async (id) => {
    return axios.get(`${API_BASE_URL}/reward/item/${id}`)
}

export const cloneReward = async (id) => {
    return axios.put(`${API_BASE_URL}/reward/item/${id}`)
}

export const deleteReward = async (id) => {
    return axios.delete(`${API_BASE_URL}/reward/item/${id}`)
}

