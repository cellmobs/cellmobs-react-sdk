import api from 'js/cellmobs/api';
import {
    SET_TAG,
    SET_TAGS,
    ADD_TAG,
    REMOVE_TAG,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/tagTypes';

export const listTags = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tag.listTags(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_TAGS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveTag = (tag) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tag.saveTag(tag)
        .then(response => {
            dispatch({type: ADD_TAG, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getTag = (tagString) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tag.getTag(tagString)
        .then(response => {
            dispatch({type: SET_TAG, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneTag = (tagString) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tag.cloneTag(tagString)
        .then(response => {
            dispatch({type: ADD_TAG, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteTag = (tagString) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.tag.deleteTag(tagString)
        .then(response => {
            dispatch({type: REMOVE_TAG, payload: tagString});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

