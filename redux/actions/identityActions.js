import api from 'js/cellmobs/api';
import {
    SET_IDENTITY,
    SET_IDENTITIES,
    ADD_IDENTITY,
    REMOVE_IDENTITY,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/identityTypes';

export const listIdentities = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.listIdentities(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_IDENTITIES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveIdentity = (identity) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.saveIdentity(identity)
        .then(response => {
            dispatch({type: ADD_IDENTITY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getIdentity = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.getIdentity(id)
        .then(response => {
            dispatch({type: SET_IDENTITY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneIdentity = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.cloneIdentity(id)
        .then(response => {
            dispatch({type: ADD_IDENTITY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteIdentity = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.deleteIdentity(id)
        .then(response => {
            dispatch({type: REMOVE_IDENTITY, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

