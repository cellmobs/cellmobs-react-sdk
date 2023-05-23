import api from 'js/cellmobs/api';
import {
    SET_PROJECT,
    SET_PROJECTS,
    ADD_PROJECT,
    REMOVE_PROJECT,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/projectTypes';

export const listProjects = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.project.listProjects(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_PROJECTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveProject = (project) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.project.saveProject(project)
        .then(response => {
            dispatch({type: ADD_PROJECT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getProject = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.project.getProject(id)
        .then(response => {
            dispatch({type: SET_PROJECT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneProject = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.project.cloneProject(id)
        .then(response => {
            dispatch({type: ADD_PROJECT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteProject = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.project.deleteProject(id)
        .then(response => {
            dispatch({type: REMOVE_PROJECT, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

