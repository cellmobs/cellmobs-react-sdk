import {
    SET_ORDER,
    SET_ORDERS,
    SET_PAGINATION,
    ADD_ORDER,
    REMOVE_ORDER,
    CLEAR_ORDER,
    CLEAR_ORDERS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/orderTypes';

const initialState = {
    order: {},
    orders: [],
    pagination: {},
    fetching: false,
    error: null
}

const orderReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_ORDER:
            /**
             * payload: Order
             */
            return { ...state, order: payload };
        case SET_ORDERS:
            /**
             * payload: List<Order>
             */
            return { ...state, orders: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Order>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_ORDER:
            /**
             * payload: Order
             */
            return { ...state, orders: [...state.orders,  payload] };
        case REMOVE_ORDER:
            /**
             * payload: Order.id
             */
            return { ...state, orders: state.orders.filter(element => element.id !== payload) };
        case CLEAR_ORDER:
            /**
             * payload: undefined
             */
            return { ...state, order: {}}
        case CLEAR_ORDERS:
            /**
             * payload: undefined
             */
            return { ...state, orders: []}
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
             * payload: ResponseEntity<Order>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default orderReducer;