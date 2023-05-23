import {
    SET_CONNECTION,
    SET_CONNECTIONS,
    SET_PAGINATION,
    ADD_CONNECTION,
    REMOVE_CONNECTION,
    CLEAR_CONNECTION,
    CLEAR_CONNECTIONS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/connectionTypes';

const initialState = {
    connection: {},
    connections: [],
    pagination: {},
    fetching: false,
    error: null
}

const connectionReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_CONNECTION:
            /**
             * payload: IdentityConnection
             */
            return { ...state, connection: payload };
        case SET_CONNECTIONS:
            /**
             * payload: List<IdentityConnection>
             */
            return { ...state, connections: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<IdentityConnection>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_CONNECTION:
            /**
             * payload: IdentityConnection
             */
            return { ...state, connections: [...state.connections,  payload] };
        case REMOVE_CONNECTION:
            /**
             * payload: IdentityConnection.id
             */
            return { ...state, connections: state.connections.filter(element => element.id !== payload) };
        case CLEAR_CONNECTION:
            /**
             * payload: undefined
             */
            return { ...state, connection: {}}
        case CLEAR_CONNECTIONS:
            /**
             * payload: undefined
             */
            return { ...state, connections: []}
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
             * payload: ResponseEntity<IdentityConnection>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default connectionReducer;