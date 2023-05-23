import api from 'js/cellmobs/api';
import {
    SET_CONNECTION,
    SET_CONNECTIONS,
    ADD_CONNECTION,
    REMOVE_CONNECTION,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/connectionTypes';

export const listConnections = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.connection.listConnections(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_CONNECTIONS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveConnection = (connection) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.connection.saveConnection(connection)
        .then(response => {
            dispatch({type: ADD_CONNECTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getConnection = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.connection.getConnection(id)
        .then(response => {
            dispatch({type: SET_CONNECTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneConnection = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.connection.cloneConnection(id)
        .then(response => {
            dispatch({type: ADD_CONNECTION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteConnection = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.identity.connection.deleteConnection(id)
        .then(response => {
            dispatch({type: REMOVE_CONNECTION, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

