import api from 'js/cellmobs/api';
import {
    SET_FIELDS,
    SET_FIELD_MAP,
    SET_ENTITY,
    SET_ENTITIES,
    SET_FETCHING,
    SET_ERROR
} from '../types/entityTypes';

export const listFields = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.entity.listFields(params)
        .then(response => {
            dispatch({type: SET_FIELDS, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const mapFields = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.entity.mapFields(params)
        .then(response => {
            dispatch({type: SET_FIELD_MAP, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const createEntity = (mapping, entityType) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.entity.createEntity(mapping, entityType)
        .then(response => {
            dispatch({type: SET_ENTITY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const createEntityList = (mappings, entityType) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.entity.createEntityList(mappings, entityType)
        .then(response => {
            dispatch({type: SET_ENTITIES, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}