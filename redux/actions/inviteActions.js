import api from 'js/cellmobs/api';
import {
    SET_INVITE,
    SET_INVITES,
    ADD_INVITE,
    REMOVE_INVITE,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/inviteTypes';

export const listInvites = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.invite.listInvites(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_INVITES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveInvite = (invite) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.invite.saveInvite(invite)
        .then(response => {
            dispatch({type: ADD_INVITE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getInvite = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.invite.getInvite(id)
        .then(response => {
            dispatch({type: SET_INVITE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneInvite = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.invite.cloneInvite(id)
        .then(response => {
            dispatch({type: ADD_INVITE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteInvite = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.invite.deleteInvite(id)
        .then(response => {
            dispatch({type: REMOVE_INVITE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

