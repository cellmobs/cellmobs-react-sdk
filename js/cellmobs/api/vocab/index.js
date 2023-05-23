import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listVocabularies = async (params) => {
    return axios.get(`${API_BASE_URL}/vocab/list`, { params: params })
}

export const getVocabulary = async (type) => {
    return axios.get(`${API_BASE_URL}/vocab/item/${type}`)
}