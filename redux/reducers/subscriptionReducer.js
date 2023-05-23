import {
    SET_SUBSCRIPTION,
    SET_SUBSCRIPTIONS,
    SET_PAGINATION,
    ADD_SUBSCRIPTION,
    REMOVE_SUBSCRIPTION,
    CLEAR_SUBSCRIPTION,
    CLEAR_SUBSCRIPTIONS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/subscriptionTypes';

const initialState = {
    subscription: {},
    subscriptions: [],
    pagination: {},
    fetching: false,
    error: null
}

const subscriptionReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_SUBSCRIPTION:
            /**
             * payload: SUBSCRIPTION
             */
            return { ...state, subscription: payload };
        case SET_SUBSCRIPTIONS:
            /**
             * payload: List<SUBSCRIPTION>
             */
            return { ...state, subscriptions: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<SUBSCRIPTION>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_SUBSCRIPTION:
            /**
             * payload: SUBSCRIPTION
             */
            return { ...state, subscriptions: [...state.subscriptions,  payload] };
        case REMOVE_SUBSCRIPTION:
            /**
             * payload: SUBSCRIPTION.id
             */
            return { ...state, subscriptions: state.subscriptions.filter(element => element.id !== payload) };
        case CLEAR_SUBSCRIPTION:
            /**
             * payload: undefined
             */
            return { ...state, subscription: {}}
        case CLEAR_SUBSCRIPTIONS:
            /**
             * payload: undefined
             */
            return { ...state, subscriptions: []}
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
             * payload: ResponseEntity<SUBSCRIPTION>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default subscriptionReducer;