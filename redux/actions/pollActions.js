import api from 'js/cellmobs/api';
import {
    SET_POLL,
    SET_POLLS,
    ADD_POLL,
    REMOVE_POLL,
    SET_PAGINATION,
    SET_POLL_RESPONSE,
    SET_POLL_RESPONSES,
    ADD_POLL_RESPONSE,
    REMOVE_POLL_RESPONSE,
    SET_RESPONSE_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/pollTypes';

export const listPolls = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.listPolls(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_POLLS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const savePoll = (poll) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.savePoll(poll)
        .then(response => {
            dispatch({type: ADD_POLL, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getPoll = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.getPoll(id)
        .then(response => {
            dispatch({type: SET_POLL, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const clonePoll = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        id.clonePoll(id)
        .then(response => {
            dispatch({type: ADD_POLL, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deletePoll = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.deletePoll(id)
        .then(response => {
            dispatch({type: REMOVE_POLL, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listPollResponses = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.response.listPollResponses(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_POLL_RESPONSES, payload: content});
            dispatch({type: SET_RESPONSE_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const savePollResponse = (poll) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.response.savePollResponse(poll)
        .then(response => {
            dispatch({type: ADD_POLL_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getPollResponse = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.response.getPollResponse(id)
        .then(response => {
            dispatch({type: SET_POLL_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const clonePollResponse = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.response.clonePollResponse(id)
        .then(response => {
            dispatch({type: ADD_POLL_RESPONSE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deletePollResponse = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.poll.response.deletePollResponse(id)
        .then(response => {
            dispatch({type: REMOVE_POLL_RESPONSE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

