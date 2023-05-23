import {
    SET_RESPONSE,
    SET_RESPONSES,
    SET_PAGINATION,
    ADD_RESPONSE,
    REMOVE_RESPONSE,
    CLEAR_RESPONSE,
    CLEAR_RESPONSES,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/integrationTypes';

const initialState = {
    response: {},
    responses: [],
    pagination: {},
    fetching: false,
    error: null
}

const integrationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_RESPONSE:
            /**
             * payload: ApiServiceResponse
             */
            return { ...state, response: payload };
        case SET_RESPONSES:
            /**
             * payload: List<ApiServiceResponse>
             */
            return { ...state, responses: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<ApiServiceResponse>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_RESPONSE:
            /**
             * payload: ApiServiceResponse
             */
            return { ...state, responses: [...state.responses,  payload] };
        case REMOVE_RESPONSE:
            /**
             * payload: ApiServiceResponse.id
             */
            return { ...state, responses: state.responses.filter(element => element.id !== payload) };
        case CLEAR_RESPONSE:
            /**
             * payload: undefined
             */
            return { ...state, response: {}}
        case CLEAR_RESPONSES:
            /**
             * payload: undefined
             */
            return { ...state, responses: []}
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
             * payload: ResponseEntity<ApiServiceResponse>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default integrationReducer;