import {
    SET_ITEM,
    SET_ITEMS,
    SET_PAGINATION,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM,
    CLEAR_ITEMS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/inboxTypes';

const initialState = {
    item: {},
    items: [],
    pagination: {},
    fetching: false,
    error: null
}

const inboxReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_ITEM:
            /**
             * payload: InboxItem
             */
            return { ...state, item: payload };
        case SET_ITEMS:
            /**
             * payload: List<InboxItem>
             */
            return { ...state, items: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<InboxItem>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_ITEM:
            /**
             * payload: InboxItem
             */
            return { ...state, items: [...state.items,  payload] };
        case REMOVE_ITEM:
            /**
             * payload: InboxItem.id
             */
            return { ...state, items: state.items.filter(element => element.id !== payload) };
        case CLEAR_ITEM:
            /**
             * payload: undefined
             */
            return { ...state, item: {}}
        case CLEAR_ITEMS:
            /**
             * payload: undefined
             */
            return { ...state, items: []}
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
             * payload: ResponseEntity<InboxItem>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default inboxReducer;