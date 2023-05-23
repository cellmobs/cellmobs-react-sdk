import api from 'js/cellmobs/api';
import { isError } from 'js/cellmobs/common';
import { LOGIN_RESPONSE, LOGIN_ERROR, SET_FETCHING, PASSWORD_ERROR, PASSWORD_RESPONSE } from '../types/authTypes';

export const login = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.auth.login(params)
        .then(response => {
            if (isError(response)) {
                dispatch({type: LOGIN_ERROR, payload: response});
            }
            else {
                dispatch({type: LOGIN_RESPONSE, payload: response});
            }
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const passwordResetRequest = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.auth.passwordPasswordReset(params)
        .then(response => {
            console.log(response)
            if (response    == '200') {
                dispatch({type: PASSWORD_RESPONSE, payload: response});
            }
            else {
                dispatch({type: PASSWORD_ERROR, payload: response});
            }
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: PASSWORD_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const resetPassword = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.auth.resetPassword(params)
        .then(response => {
            if (isError(response)) {
                dispatch({type: PASSWORD_ERROR, payload: response});
            }
            else {
                dispatch({type: PASSWORD_RESPONSE, payload: response});
            }
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: PASSWORD_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}
