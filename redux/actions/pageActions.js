import api from 'js/cellmobs/api';
import {
    SET_PAGE,
    SET_PAGES,
    ADD_PAGE,
    ADD_PAGES,
    REMOVE_PAGE,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/pageTypes';

export const listPages = (params, add = false) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.page.listPages(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: add ? ADD_PAGES: SET_PAGES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const savePage = (page) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.page.savePage(page)
        .then(response => {
            dispatch({type: ADD_PAGE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getPage = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.page.getPage(id)
        .then(response => {
            dispatch({type: SET_PAGE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const clonePage = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.page.clonePage(id)
        .then(response => {
            dispatch({type: ADD_PAGE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deletePage = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.page.deletePage(id)
        .then(response => {
            dispatch({type: REMOVE_PAGE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

