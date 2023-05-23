import api from 'js/cellmobs/api';
import {
    SET_METAINFO,
    SET_METAINFOS,
    ADD_METAINFO,
    REMOVE_METAINFO,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/metainfoTypes';

export const listMetaInfo = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.metainfo.listMetaInfo(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_METAINFOS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveMetaInfo = (metainfo) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.metainfo.saveMetaInfo(metainfo)
        .then(response => {
            dispatch({type: ADD_METAINFO, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getMetaInfo = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.metainfo.getMetaInfo(id)
        .then(response => {
            dispatch({type: SET_METAINFO, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteMetaInfo = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.metainfo.deleteMetaInfo(id)
        .then(response => {
            dispatch({type: REMOVE_METAINFO, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

