import api from 'js/cellmobs/api';
import {
    SET_ITEM,
    SET_ITEMS,
    ADD_ITEM,
    REMOVE_ITEM,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/inboxTypes';

export const listInboxs = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.inbox.listInboxs(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_ITEMS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveInbox = (inbox) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.inbox.saveInbox(inbox)
        .then(response => {
            dispatch({type: ADD_ITEM, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getInbox = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.inbox.getInbox(id)
        .then(response => {
            dispatch({type: SET_ITEM, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneInbox = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.inbox.cloneInbox(id)
        .then(response => {
            dispatch({type: ADD_ITEM, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteInbox = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.inbox.deleteInbox(id)
        .then(response => {
            dispatch({type: REMOVE_ITEM, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

