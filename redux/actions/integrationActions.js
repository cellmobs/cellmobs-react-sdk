import api from 'js/cellmobs/api';
import {
    SET_RESPONSE,
    SET_RESPONSES,
    ADD_RESPONSE,
    REMOVE_RESPONSE,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/integrationTypes';

export const listIntegrations = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.api.service.listIntegrations(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_RESPONSES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveIntegration = (integration) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.api.service.saveIntegration(integration)
        .then(response => {
            dispatch({type: ADD_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getIntegration = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.api.service.getIntegration(id)
        .then(response => {
            dispatch({type: SET_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneIntegration = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.api.service.cloneIntegration(id)
        .then(response => {
            dispatch({type: ADD_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteIntegration = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.api.service.deleteIntegration(id)
        .then(response => {
            dispatch({type: REMOVE_RESPONSE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

