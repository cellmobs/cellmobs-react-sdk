import {
    SET_TRANSACTION,
    SET_TRANSACTIONS,
    SET_PAGINATION,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION,
    CLEAR_TRANSACTION,
    CLEAR_TRANSACTIONS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/transactionTypes';

const initialState = {
    transaction: {},
    transactions: [],
    pagination: {},
    fetching: false,
    error: null
}

const transactionReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_TRANSACTION:
            /**
             * payload: PayTransaction
             */
            return { ...state, transaction: payload };
        case SET_TRANSACTIONS:
            /**
             * payload: List<PayTransaction>
             */
            return { ...state, transactions: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<PayTransaction>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_TRANSACTION:
            /**
             * payload: PayTransaction
             */
            return { ...state, transactions: [...state.transactions,  payload] };
        case REMOVE_TRANSACTION:
            /**
             * payload: PayTransaction.id
             */
            return { ...state, transactions: state.transactions.filter(element => element.id !== payload) };
        case CLEAR_TRANSACTION:
            /**
             * payload: undefined
             */
            return { ...state, transaction: {}}
        case CLEAR_TRANSACTIONS:
            /**
             * payload: undefined
             */
            return { ...state, transactions: []}
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
             * payload: ResponseEntity<PayTransaction>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default transactionReducer;