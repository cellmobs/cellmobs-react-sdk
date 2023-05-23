import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listModels = async (collection, params) => {
    return axios.get(`${API_BASE_URL}/model/${collection}/list`, { params: params })
}

export const countModels = async (collection, params) => {
    return axios.get(`${API_BASE_URL}/model/${collection}/count`, { params: params })
}

export const saveModel = async (collection, model) => {
    return axios.post(`${API_BASE_URL}/model/${collection}/item`, model)
}

export const getModel = async (collection, id) => {
    return axios.get(`${API_BASE_URL}/model/${collection}/item/${id}`)
}

export const cloneModel = async (collection, id) => {
    return axios.put(`${API_BASE_URL}/model/${collection}/item/${id}`)
}

export const deleteModel = async (collection, id) => {
    return axios.delete(`${API_BASE_URL}/model/${collection}/item/${id}`)
}