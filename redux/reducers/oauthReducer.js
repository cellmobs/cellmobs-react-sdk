import {
    SET_SETTING,
    SET_SETTINGS,
    SET_PAGINATION,
    ADD_SETTING,
    REMOVE_SETTING,
    CLEAR_SETTING,
    CLEAR_SETTINGS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/oauthTypes';

const initialState = {
    oauth: {},
    oauths: [],
    pagination: {},
    fetching: false,
    error: null
}

const oauthReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_SETTING:
            /**
             * payload: OAuthApp
             */
            return { ...state, oauth: payload };
        case SET_SETTINGS:
            /**
             * payload: List<OAuthApp>
             */
            return { ...state, oauths: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<OAuthApp>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_SETTING:
            /**
             * payload: OAuthApp
             */
            return { ...state, oauths: [...state.oauths,  payload] };
        case REMOVE_SETTING:
            /**
             * payload: OAuthApp.id
             */
            return { ...state, oauths: state.oauths.filter(element => element.id !== payload) };
        case CLEAR_SETTING:
            /**
             * payload: undefined
             */
            return { ...state, oauth: {}}
        case CLEAR_SETTINGS:
            /**
             * payload: undefined
             */
            return { ...state, oauths: []}
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
             * payload: ResponseEntity<OAuthApp>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default oauthReducer;