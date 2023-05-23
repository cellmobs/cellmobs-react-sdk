import api from 'js/cellmobs/api';
import {
    SET_CART,
    SET_CARTS,
    ADD_CART,
    REMOVE_CART,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/cartTypes';

export const listCarts = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.cart.listCarts(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_CARTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveCart = (cart) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.cart.saveCart(cart)
        .then(response => {
            dispatch({type: ADD_CART, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getCart = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.cart.getCart(id)
        .then(response => {
            dispatch({type: SET_CART, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneCart = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.cart.cloneCart(id)
        .then(response => {
            dispatch({type: ADD_CART, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteCart = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.cart.deleteCart(id)
        .then(response => {
            dispatch({type: REMOVE_CART, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

