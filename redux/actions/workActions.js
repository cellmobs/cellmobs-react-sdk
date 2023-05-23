import api from 'js/cellmobs/api';
import {
    SET_WORK,
    SET_WORKS,
    ADD_WORK,
    REMOVE_WORK,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/workTypes';

export const listWorks = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.work.listWorks(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_WORKS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveWork = (work) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.work.saveWork(work)
        .then(response => {
            dispatch({type: ADD_WORK, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getWork = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.work.getWork(id)
        .then(response => {
            dispatch({type: SET_WORK, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneWork = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.work.cloneWork(id)
        .then(response => {
            dispatch({type: ADD_WORK, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteWork = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.work.deleteWork(id)
        .then(response => {
            dispatch({type: REMOVE_WORK, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

