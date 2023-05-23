import {
    SET_TAG,
    SET_TAGS,
    SET_PAGINATION,
    ADD_TAG,
    REMOVE_TAG,
    CLEAR_TAG,
    CLEAR_TAGS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/tagTypes';

const initialState = {
    tag: {},
    tags: [],
    pagination: {},
    fetching: false,
    error: null
}

const tagReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TAG:
            /**
             * payload: Tag
             */
            return { ...state, tag: payload };
        case SET_TAGS:
            /**
             * payload: List<Tag>
             */
            return { ...state, tags: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Tag>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_TAG:
            /**
             * payload: Tag
             */
            return { ...state, tags: [...state.tags,  payload] };
        case REMOVE_TAG:
            /**
             * payload: Tag.tag
             */
            return { ...state, tags: state.tags.filter(element => element.tag !== payload) };
        case CLEAR_TAG:
            /**
             * payload: undefined
             */
            return { ...state, tag: {}}
        case CLEAR_TAGS:
            /**
             * payload: undefined
             */
            return { ...state, tags: []}
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
             * payload: ResponseEntity<Tag>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default tagReducer;