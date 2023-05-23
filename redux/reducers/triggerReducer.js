import {
    SET_TRIGGER,
    SET_TRIGGERS,
    SET_PAGINATION,
    ADD_TRIGGER,
    REMOVE_TRIGGER,
    CLEAR_TRIGGER,
    CLEAR_TRIGGERS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/triggerTypes';

const initialState = {
    trigger: {},
    triggers: [],
    pagination: {},
    fetching: false,
    error: null
}

const triggerReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_TRIGGER:
            /**
             * payload: RewardTrigger
             */
            return { ...state, trigger: payload };
        case SET_TRIGGERS:
            /**
             * payload: List<RewardTrigger>
             */
            return { ...state, triggers: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<RewardTrigger>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_TRIGGER:
            /**
             * payload: RewardTrigger
             */
            return { ...state, triggers: [...state.triggers,  payload] };
        case REMOVE_TRIGGER:
            /**
             * payload: RewardTrigger.id
             */
            return { ...state, triggers: state.triggers.filter(element => element.id !== payload) };
        case CLEAR_TRIGGER:
            /**
             * payload: undefined
             */
            return { ...state, trigger: {}}
        case CLEAR_TRIGGERS:
            /**
             * payload: undefined
             */
            return { ...state, triggers: []}
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
             * payload: ResponseEntity<RewardTrigger>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default triggerReducer;