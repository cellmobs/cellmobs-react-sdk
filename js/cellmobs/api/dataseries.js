import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../constants';

export const listDataseries = async (params) => {
    return axios.get(`${API_BASE_URL}/dataseries/list`, { params: params })
}