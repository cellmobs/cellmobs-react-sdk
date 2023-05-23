import api from 'js/cellmobs/api';
import {
    SET_VOCABULARY,
    SET_VOCABULARIES,
    SET_PAGINATION,
    SET_VALUE,
    SET_VALUES,
    ADD_VALUE,
    REMOVE_VALUE,
    SET_VALUE_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/vocabTypes';

export const listVocabularies = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.listVocabularies(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_VOCABULARIES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getVocabulary = (type) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.getVocabulary(type)
        .then(response => {
            dispatch({type: SET_VOCABULARY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listValues = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.value.listValues(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_VALUES, payload: content});
            dispatch({type: SET_VALUE_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveValue = (value) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.value.saveValue(value)
        .then(response => {
            dispatch({type: ADD_VALUE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getValue = (type) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.value.getValue(type)
        .then(response => {
            dispatch({type: SET_VALUE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneValue = (type) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.value.cloneValue(type)
        .then(response => {
            dispatch({type: ADD_VALUE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteValue = (type) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.vocab.value.deleteValue(type)
        .then(response => {
            dispatch({type: REMOVE_VALUE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

