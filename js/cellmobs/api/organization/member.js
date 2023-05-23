import Axios from '../../plugins/axios';
let axios = Axios();
import { API_BASE_URL } from '../../constants';

export const listMembers = async (params) => {
    return axios.get(`${API_BASE_URL}/organization/member/list`, { params: params })
}

export const listMembersForTenant = async (params) => {

    // var headers = {
    //     'Authorization': 'Bearer ' + this.$store.state.token,
    //     'X-Api-Key' : params.apiKey,
    //     'X-TenantID' : params.tenantId
    // }
    return axios.get(`https://web-dev.${params.domain}/v1/organization/member/list`, { 
        params: params, 
        //headers: headers 
    })
}

export const saveMember = async (member) => {
    return axios.post(`${API_BASE_URL}/organization/member/item`, member)
}

export const getMember = async (id) => {
    return axios.get(`${API_BASE_URL}/organization/member/item/${id}`)
}

export const cloneMember = async (id) => {
    return axios.put(`${API_BASE_URL}/organization/member/item/${id}`)
}

export const deleteMember = async (id) => {
    return axios.delete(`${API_BASE_URL}/organization/member/item/${id}`)
}