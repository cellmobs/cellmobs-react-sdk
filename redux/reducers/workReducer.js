import {
    SET_WORK,
    SET_WORKS,
    SET_PAGINATION,
    ADD_WORK,
    REMOVE_WORK,
    CLEAR_WORK,
    CLEAR_WORKS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/workTypes';

const initialState = {
    work: {},
    works: [],
    pagination: {},
    fetching: false,
    error: null
}

const workReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_WORK:
            /**
             * payload: Work
             */
            return { ...state, work: payload };
        case SET_WORKS:
            /**
             * payload: List<Work>
             */
            return { ...state, works: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Work>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_WORK:
            /**
             * payload: Work
             */
            return { ...state, works: [...state.works,  payload] };
        case REMOVE_WORK:
            /**
             * payload: Work.id
             */
            return { ...state, works: state.works.filter(element => element.id !== payload) };
        case CLEAR_WORK:
            /**
             * payload: undefined
             */
            return { ...state, work: {}}
        case CLEAR_WORKS:
            /**
             * payload: undefined
             */
            return { ...state, works: []}
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
             * payload: ResponseEntity<Work>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default workReducer;