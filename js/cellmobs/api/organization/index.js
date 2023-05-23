import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listOrganizations = async (params) => {
    return axios.get(`${API_BASE_URL}/organization/list`, { params: params })
}

export const saveOrganization = async (organization) => {
    return axios.post(`${API_BASE_URL}/organization/item`, organization)
}

export const getOrganization = async (id) => {
    return axios.get(`${API_BASE_URL}/organization/item/${id}`)
}

export const cloneOrganization = async (id) => {
    return axios.put(`${API_BASE_URL}/organization/item/${id}`)
}

export const deleteOrganization = async (id) => {
    return axios.delete(`${API_BASE_URL}/organization/item/${id}`)
}