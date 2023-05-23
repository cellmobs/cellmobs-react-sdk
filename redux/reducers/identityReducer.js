import {
    SET_IDENTITY,
    SET_IDENTITIES,
    SET_PAGINATION,
    ADD_IDENTITY,
    REMOVE_IDENTITY,
    CLEAR_IDENTITY,
    CLEAR_IDENTITIES,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/identityTypes';

const initialState = {
    identity: {},
    identities: [],
    pagination: {},
    fetching: false,
    error: null
}

const identityReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_IDENTITY:
            /**
             * payload: Identity
             */
            return { ...state, identity: payload };
        case SET_IDENTITIES:
            /**
             * payload: List<Identity>
             */
            return { ...state, identities: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Identity>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_IDENTITY:
            /**
             * payload: Identity
             */
            return { ...state, identities: [...state.identities,  payload] };
        case REMOVE_IDENTITY:
            /**
             * payload: Identity.id
             */
            return { ...state, identities: state.identities.filter(element => element.id !== payload) };
        case CLEAR_IDENTITY:
            /**
             * payload: undefined
             */
            return { ...state, identity: {}}
        case CLEAR_IDENTITIES:
            /**
             * payload: undefined
             */
            return { ...state, identities: []}
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
             * payload: ResponseEntity<Identity>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default identityReducer;