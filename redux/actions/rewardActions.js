import api from 'js/cellmobs/api';
import {
    SET_REWARD,
    SET_REWARDS,
    ADD_REWARD,
    REMOVE_REWARD,
    SET_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/rewardTypes';

export const listRewards = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.listRewards(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_REWARDS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveReward = (reward) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.saveReward(reward)
        .then(response => {
            dispatch({type: ADD_REWARD, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getReward = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.getReward(id)
        .then(response => {
            dispatch({type: SET_REWARD, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneReward = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.cloneReward(id)
        .then(response => {
            dispatch({type: ADD_REWARD, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteReward = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.reward.deleteReward(id)
        .then(response => {
            dispatch({type: REMOVE_REWARD, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

