import api from 'js/cellmobs/api';
import {
    SET_TRIGGER,
    SET_TRIGGERS,
    ADD_TRIGGER,
    REMOVE_TRIGGER,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/triggerTypes';

export const listTriggers = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.trigger.listTriggers(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_TRIGGERS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveTrigger = (trigger) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.trigger.saveTrigger(trigger)
        .then(response => {
            dispatch({type: ADD_TRIGGER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getTrigger = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.trigger.getTrigger(id)
        .then(response => {
            dispatch({type: SET_TRIGGER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneTrigger = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.trigger.cloneTrigger(id)
        .then(response => {
            dispatch({type: ADD_TRIGGER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteTrigger = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.trigger.deleteTrigger(id)
        .then(response => {
            dispatch({type: REMOVE_TRIGGER, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

