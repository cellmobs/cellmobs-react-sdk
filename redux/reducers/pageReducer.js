import {
    SET_PAGE,
    SET_PAGES,
    SET_PAGINATION,
    ADD_PAGE,
    ADD_PAGES,
    REMOVE_PAGE,
    CLEAR_PAGE,
    CLEAR_PAGES,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/pageTypes';

const initialState = {
    page: {},
    pages: [],
    pagination: {},
    fetching: false,
    error: null
}

const pageReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_PAGE:
            /**
             * payload: WebPage
             */
            return { ...state, page: payload };
        case SET_PAGES:
            /**
             * payload: List<WebPage>
             */
            return { ...state, pages: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<WebPage>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_PAGE:
            /**
             * payload: WebPage
             */
            if (state.pages.filter(p => p.id == payload.id).length > 0) {
                return { ...state, pages: [...state.pages.map(p => p.id == payload.id ? payload : p)] };
            }
            return { ...state, pages: [...state.pages, payload] };
        case ADD_PAGES:
            /**
             * payload: List<WebPage>
             */
            return { ...state, pages: [...state.pages,  ...payload] };
        case REMOVE_PAGE:
            /**
             * payload: WebPage.id
             */
            return { ...state, pages: state.pages.filter(element => element.id !== payload) };
        case CLEAR_PAGE:
            /**
             * payload: undefined
             */
            return { ...state, page: {}}
        case CLEAR_PAGES:
            /**
             * payload: undefined
             */
            return { ...state, pages: []}
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
             * payload: ResponseEntity<WebPage>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default pageReducer;