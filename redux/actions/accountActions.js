import api from 'js/cellmobs/api';
import {
    SET_ACCOUNT,
    SET_ACCOUNTS,
    ADD_ACCOUNT,
    REMOVE_ACCOUNT,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR,
    SET_PRIMARY
} from '../types/accountTypes';

export const listAccounts = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.listAccounts(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_ACCOUNTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveAccount = (account) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.saveAccount(account)
        .then(response => {
            dispatch({type: ADD_ACCOUNT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getAccount = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.getAccount(id)
        .then(response => {
            dispatch({type: SET_ACCOUNT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneAccount = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.cloneAccount(id)
        .then(response => {
            dispatch({type: ADD_ACCOUNT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteAccount = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.deleteAccount(id)
        .then(response => {
            dispatch({type: REMOVE_ACCOUNT, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const setPrimaryAccount = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.account.setPrimaryAccount(params)
        .then(response => {
            dispatch({type: SET_PRIMARY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

