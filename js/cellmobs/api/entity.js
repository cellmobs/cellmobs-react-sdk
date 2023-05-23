import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listFields = async (params) => {
    return axios.get(`${API_BASE_URL}/entity/list-fields`, { params: params })
}

export const mapFields = async (params) => {
    return axios.get(`${API_BASE_URL}/entity/map-fields`, { params: params })
}

export const createEntity = async (mapping, entityType) => {
    return axios.post(`${API_BASE_URL}/entity/create`, mapping, {params: {entityType: entityType}})
}

export const createEntityList = async (mappings, entityType) => {
    return axios.post(`${API_BASE_URL}/entity/create-list`, mappings, {params: {entityType: entityType}})
}