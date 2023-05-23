import api from 'js/cellmobs/api';
import {
    SET_TRANSACTION,
    SET_TRANSACTIONS,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/transactionTypes';

export const listTransactions = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.transaction.listTransactions(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_TRANSACTIONS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveTransaction = (transaction) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.transaction.saveTransaction(transaction)
        .then(response => {
            dispatch({type: ADD_TRANSACTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getTransaction = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.transaction.getTransaction(id)
        .then(response => {
            dispatch({type: SET_TRANSACTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneTransaction = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.transaction.cloneTransaction(id)
        .then(response => {
            dispatch({type: ADD_TRANSACTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteTransaction = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.transaction.deleteTransaction(id)
        .then(response => {
            dispatch({type: REMOVE_TRANSACTION, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

