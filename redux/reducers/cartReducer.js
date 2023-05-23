import {
    SET_CART,
    SET_CARTS,
    SET_PAGINATION,
    ADD_CART,
    REMOVE_CART,
    CLEAR_CART,
    CLEAR_CARTS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/cartTypes';

const initialState = {
    cart: {},
    carts: [],
    pagination: {},
    fetching: false,
    error: null
}

const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_CART:
            /**
             * payload: Cart
             */
            return { ...state, cart: payload };
        case SET_CARTS:
            /**
             * payload: List<Cart>
             */
            return { ...state, carts: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Cart>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_CART:
            /**
             * payload: Cart
             */
            return { ...state, carts: [...state.carts,  payload] };
        case REMOVE_CART:
            /**
             * payload: Cart.id
             */
            return { ...state, carts: state.carts.filter(element => element.id !== payload) };
        case CLEAR_CART:
            /**
             * payload: undefined
             */
            return { ...state, cart: {}}
        case CLEAR_CARTS:
            /**
             * payload: undefined
             */
            return { ...state, carts: []}
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
             * payload: ResponseEntity<Cart>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default cartReducer;