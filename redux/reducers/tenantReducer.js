import {
    SET_TENANT,
    SET_TENANTS,
    SET_PAGINATION,
    ADD_TENANT,
    REMOVE_TENANT,
    CLEAR_TENANT,
    CLEAR_TENANTS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/tenantTypes';

const initialState = {
    tenant: {},
    tenants: [],
    pagination: {},
    fetching: false,
    error: null
}

const tenantReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_TENANT:
            /**
             * payload: TENANT
             */
            return { ...state, tenant: payload };
        case SET_TENANTS:
            /**
             * payload: List<TENANT>
             */
            return { ...state, tenants: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<TENANT>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_TENANT:
            /**
             * payload: TENANT
             */
            return { ...state, tenants: [...state.tenants,  payload] };
        case REMOVE_TENANT:
            /**
             * payload: TENANT.id
             */
            return { ...state, tenants: state.tenants.filter(element => element.id !== payload) };
        case CLEAR_TENANT:
            /**
             * payload: undefined
             */
            return { ...state, tenant: {}}
        case CLEAR_TENANTS:
            /**
             * payload: undefined
             */
            return { ...state, tenants: []}
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
             * payload: ResponseEntity<TENANT>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default tenantReducer;