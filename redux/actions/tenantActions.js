import api from 'js/cellmobs/api';
import {
    SET_TENANT,
    SET_TENANTS,
    ADD_TENANT,
    REMOVE_TENANT,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/tenantTypes';

export const listTenants = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tenant.listTenants(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_TENANTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveTenant = (tenant) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tenant.saveTenant(tenant)
        .then(response => {
            dispatch({type: SET_TENANT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getTenant = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tenant.getTenant(id)
        .then(response => {
            dispatch({type: SET_TENANT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteTenant = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tenant.deleteTenant(id)
        .then(response => {
            dispatch({type: REMOVE_TENANT, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const verifyTenant = (id, domain) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tenant.verifyTenant(id, domain)
        .then(response => {
            dispatch({type: SET_TENANT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}
