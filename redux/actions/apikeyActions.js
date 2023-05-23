import api from 'js/cellmobs/api';
import {
    SET_APIKEY,
    SET_APIKEYS,
    ADD_APIKEY,
    REMOVE_APIKEY,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/apikeyTypes';

export const listApiKeys = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.apikey.listApiKey(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_APIKEYS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const generateApiKey = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.apikey.generateApiKey(params)
        .then(response => {
            dispatch({type: ADD_APIKEY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getApiKey = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.apiKey.getApiKey(id)
        .then(response => {
            dispatch({type: SET_APIKEY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteApiKey = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.apikey.deleteApiKey(id)
        .then(response => {
            dispatch({type: REMOVE_APIKEY, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

