import {
    SET_ACCOUNT,
    SET_ACCOUNTS,
    SET_PAGINATION,
    ADD_ACCOUNT,
    REMOVE_ACCOUNT,
    CLEAR_ACCOUNT,
    CLEAR_ACCOUNTS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR,
    SET_PRIMARY
} from '../types/accountTypes';

const initialState = {
    account: {},
    accounts: [],
    pagination: {},
    fetching: false,
    error: null
}

const accountReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_ACCOUNT:
            /**
             * payload: Account
             */
            return { ...state, account: payload };
        case SET_ACCOUNTS:
            /**
             * payload: List<Account>
             */
            return { ...state, accounts: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Account>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_ACCOUNT:
            /**
             * payload: Account
             */
            return { ...state, accounts: [...state.accounts,  payload] };
        case REMOVE_ACCOUNT:
            /**
             * payload: Account.id
             */
            return { ...state, accounts: state.accounts.filter(element => element.id !== payload) };
        case CLEAR_ACCOUNT:
            /**
             * payload: undefined
             */
            return { ...state, account: {}}
        case CLEAR_ACCOUNTS:
            /**
             * payload: undefined
             */
            return { ...state, accounts: []}
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
             * payload: ResponseEntity<Account>
             */
            return { ...state, error: payload };
        case SET_PRIMARY:
            /**
             * payload: Account
             */
            return { ...state, account:payload };
        default:
            break;
    }
    return state;
}

export default accountReducer;