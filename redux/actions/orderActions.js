import api from 'js/cellmobs/api';
import {
    SET_ORDER,
    SET_ORDERS,
    ADD_ORDER,
    REMOVE_ORDER,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/orderTypes';

export const listOrders = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.listOrders(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_ORDERS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveOrder = (order) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.saveOrder(order)
        .then(response => {
            dispatch({type: ADD_ORDER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getOrder = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.getOrder(id)
        .then(response => {
            dispatch({type: SET_ORDER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneOrder = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.cloneOrder(id)
        .then(response => {
            dispatch({type: ADD_ORDER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteOrder = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.deleteOrder(id)
        .then(response => {
            dispatch({type: REMOVE_ORDER, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const currentCharges = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.order.currentCharges(id)
        .then(response => {
            dispatch({type: SET_ORDER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

