import {
    SET_POLL,
    SET_POLLS,
    SET_PAGINATION,
    ADD_POLL,
    REMOVE_POLL,
    CLEAR_POLL,
    CLEAR_POLLS,
    CLEAR_PAGINATION,
    SET_POLL_RESPONSE,
    SET_POLL_RESPONSES,
    SET_RESPONSE_PAGINATION,
    ADD_POLL_RESPONSE,
    REMOVE_POLL_RESPONSE,
    CLEAR_POLL_RESPONSE,
    CLEAR_POLL_RESPONSES,
    CLEAR_RESPONSE_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/pollTypes';

const initialState = {
    poll: {},
    polls: [],
    pagination: {},
    response: {},
    responses: [],
    responsePagination: {},
    fetching: false,
    error: null
}

const pollReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_POLL:
            /**
             * payload: Poll
             */
            return { ...state, poll: payload };
        case SET_POLLS:
            /**
             * payload: List<Poll>
             */
            return { ...state, polls: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Poll>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_POLL:
            /**
             * payload: Poll
             */
            return { ...state, polls: [...state.polls,  payload] };
        case REMOVE_POLL:
            /**
             * payload: Poll.id
             */
            return { ...state, polls: state.polls.filter(element => element.id !== payload) };
        case CLEAR_POLL:
            /**
             * payload: undefined
             */
            return { ...state, poll: {}}
        case CLEAR_POLLS:
            /**
             * payload: undefined
             */
            return { ...state, polls: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_POLL_RESPONSE:
            /**
             * payload: PollResponse
             */
            return { ...state, response: payload };
        case SET_POLL_RESPONSES:
            /**
             * payload: List<PollResponse>
             */
            return { ...state, responses: payload };
        case SET_RESPONSE_PAGINATION:
            /**
             * payload: Page<PollResponse>, not including content
             */
            return { ...state, responsePagination: payload };
        case ADD_POLL_RESPONSE:
            /**
             * payload: PollResponse
             */
            return { ...state, responses: [...state.responses,  payload] };
        case REMOVE_POLL_RESPONSE:
            /**
             * payload: PollResponse.id
             */
            return { ...state, responses: state.responses.filter(element => element.id !== payload) };
        case CLEAR_POLL_RESPONSE:
            /**
             * payload: undefined
             */
            return { ...state, response: {}}
        case CLEAR_POLL_RESPONSES:
            /**
             * payload: undefined
             */
            return { ...state, responses: []}
        case CLEAR_RESPONSE_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, responsePagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<PollResponse>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default pollReducer;