import api from 'js/cellmobs/api';
import {
    SET_CONTENT,
    SET_CONTENTS,
    ADD_CONTENT,
    REMOVE_CONTENT,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/contentTypes';

export const listContents = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.content.listContents(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_CONTENTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveContent = (content) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.content.saveContent(content)
        .then(response => {
            dispatch({type: ADD_CONTENT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getContent = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.content.getContent(id)
        .then(response => {
            dispatch({type: SET_CONTENT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneContent = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.content.cloneContent(id)
        .then(response => {
            dispatch({type: ADD_CONTENT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteContent = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.content.deleteContent(id)
        .then(response => {
            dispatch({type: REMOVE_CONTENT, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

