import {
    SET_APIKEY,
    SET_APIKEYS,
    SET_PAGINATION,
    ADD_APIKEY,
    REMOVE_APIKEY,
    CLEAR_APIKEY,
    CLEAR_APIKEYS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/apikeyTypes';

const initialState = {
    apikey: {},
    apikeys: [],
    pagination: {},
    fetching: false,
    error: null
}

const apikeyReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_APIKEY:
            /**
             * payload: APIKEY
             */
            return { ...state, apikey: payload };
        case SET_APIKEYS:
            /**
             * payload: List<APIKEY>
             */
            return { ...state, apikeys: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<APIKEY>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_APIKEY:
            /**
             * payload: APIKEY
             */
            return { ...state, apikeys: [...state.apikeys,  payload] };
        case REMOVE_APIKEY:
            /**
             * payload: APIKEY.id
             */
            return { ...state, apikeys: state.apikeys.filter(element => element.id !== payload) };
        case CLEAR_APIKEY:
            /**
             * payload: undefined
             */
            return { ...state, apikey: {}}
        case CLEAR_APIKEYS:
            /**
             * payload: undefined
             */
            return { ...state, apikeys: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<APIKEY>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default apikeyReducer;