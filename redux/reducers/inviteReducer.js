import {
    SET_INVITE,
    SET_INVITES,
    SET_PAGINATION,
    ADD_INVITE,
    REMOVE_INVITE,
    CLEAR_INVITE,
    CLEAR_INVITES,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/inviteTypes';

const initialState = {
    invite: {},
    invites: [],
    pagination: {},
    fetching: false,
    error: null
}

const inviteReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_INVITE:
            /**
             * payload: Invite
             */
            return { ...state, invite: payload };
        case SET_INVITES:
            /**
             * payload: List<Invite>
             */
            return { ...state, invites: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Invite>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_INVITE:
            /**
             * payload: Invite
             */
            return { ...state, invites: [...state.invites,  payload] };
        case REMOVE_INVITE:
            /**
             * payload: Invite.id
             */
            return { ...state, invites: state.invites.filter(element => element.id !== payload) };
        case CLEAR_INVITE:
            /**
             * payload: undefined
             */
            return { ...state, invite: {}}
        case CLEAR_INVITES:
            /**
             * payload: undefined
             */
            return { ...state, invites: []}
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
             * payload: ResponseEntity<Invite>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default inviteReducer;