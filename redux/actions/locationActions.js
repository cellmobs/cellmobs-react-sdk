import api from 'js/cellmobs/api';
import {
    SET_LOCATION,
    SET_LOCATIONS,
    ADD_LOCATION,
    REMOVE_LOCATION,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/locationTypes';

export const listLocations = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.location.listLocations(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_LOCATIONS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveLocation = (location) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.location.saveLocation(location)
        .then(response => {
            dispatch({type: ADD_LOCATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getLocation = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.location.getLocation(id)
        .then(response => {
            dispatch({type: SET_LOCATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneLocation = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.location.cloneLocation(id)
        .then(response => {
            dispatch({type: ADD_LOCATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteLocation = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.location.deleteLocation(id)
        .then(response => {
            dispatch({type: REMOVE_LOCATION, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

