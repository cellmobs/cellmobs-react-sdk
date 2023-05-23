import api from 'js/cellmobs/api';
import {
    SET_SETTING,
    SET_SETTINGS,
    ADD_SETTING,
    REMOVE_SETTING,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/oauthTypes';

export const listSettings = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.oauth.settings.listSettings(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_SETTINGS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveSetting = (oauth) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.oauth.settings.saveSetting(oauth)
        .then(response => {
            dispatch({type: ADD_SETTING, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getSetting = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.oauth.settings.getSetting(id)
        .then(response => {
            dispatch({type: SET_SETTING, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneSetting = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.oauth.settings.cloneSetting(id)
        .then(response => {
            dispatch({type: ADD_SETTING, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteSetting = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.oauth.settings.deleteSetting(id)
        .then(response => {
            dispatch({type: REMOVE_SETTING, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

