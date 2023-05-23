import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listLocations = async (params) => {
    return axios.get(`${API_BASE_URL}/location/list`, { params: params })
}

export const saveLocation = async (location) => {
    return axios.post(`${API_BASE_URL}/location/item`, location)
}

export const getLocation = async (id) => {
    return axios.get(`${API_BASE_URL}/location/item/${id}`)
}

export const cloneLocation = async (id) => {
    return axios.put(`${API_BASE_URL}/location/item/${id}`)
}

export const deleteLocation = async (id) => {
    return axios.delete(`${API_BASE_URL}/location/item/${id}`)
}

