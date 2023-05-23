import {
    SET_CONTENT,
    SET_CONTENTS,
    SET_PAGINATION,
    ADD_CONTENT,
    REMOVE_CONTENT,
    CLEAR_CONTENT,
    CLEAR_CONTENTS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/contentTypes';

const initialState = {
    content: {},
    contents: [],
    pagination: {},
    fetching: false,
    error: null
}

const contentReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_CONTENT:
            /**
             * payload: Content
             */
            return { ...state, content: payload };
        case SET_CONTENTS:
            /**
             * payload: List<Content>
             */
            return { ...state, contents: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Content>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_CONTENT:
            /**
             * payload: Content
             */
             if (state.contents.filter(p => p.id == payload.id).length > 0) {
                return { ...state, contents: [...state.contents.map(p => p.id == payload.id ? payload : p)] };
            }
            return { ...state, contents: [...state.contents, payload] };
        case REMOVE_CONTENT:
            /**
             * payload: Content.id
             */
            return { ...state, contents: state.contents.filter(element => element.id !== payload) };
        case CLEAR_CONTENT:
            /**
             * payload: undefined
             */
            return { ...state, content: {}}
        case CLEAR_CONTENTS:
            /**
             * payload: undefined
             */
            return { ...state, contents: []}
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
             * payload: ResponseEntity<Content>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default contentReducer;