import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listProjects = async (params) => {
    return axios.get(`${API_BASE_URL}/project/list`, { params: params })
}

export const saveProject = async (project) => {
    return axios.post(`${API_BASE_URL}/project/item`, project)
}

export const getProject = async (id) => {
    return axios.get(`${API_BASE_URL}/project/item/${id}`)
}

export const cloneProject = async (id) => {
    return axios.put(`${API_BASE_URL}/project/item/${id}`)
}

export const deleteProject = async (id) => {
    return axios.delete(`${API_BASE_URL}/project/item/${id}`)
}

