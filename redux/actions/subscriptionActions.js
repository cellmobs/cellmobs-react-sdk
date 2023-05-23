import api from 'js/cellmobs/api';
import {
    SET_SUBSCRIPTION,
    SET_SUBSCRIPTIONS,
    ADD_SUBSCRIPTION,
    REMOVE_SUBSCRIPTION,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/subscriptionTypes';

export const listSubscriptions = (params) => {

    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.subscription.listSubscriptions(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_SUBSCRIPTIONS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveSubscription = (sub) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.subscription.saveSubscription(sub)
        .then(response => {
            dispatch({type: ADD_SUBSCRIPTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getSubscription = () => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.subscription.getSubscription()
        .then(response => {
            dispatch({type: SET_SUBSCRIPTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cancelSubscription = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.subscription.cancelSubscription(id)
        .then(response => {
            dispatch({type: REMOVE_SUBSCRIPTION, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}



