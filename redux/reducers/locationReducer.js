import {
    SET_LOCATION,
    SET_LOCATIONS,
    SET_PAGINATION,
    ADD_LOCATION,
    REMOVE_LOCATION,
    CLEAR_LOCATION,
    CLEAR_LOCATIONS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/locationTypes';

const initialState = {
    location: {},
    locations: [],
    pagination: {},
    fetching: false,
    error: null
}

const locationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_LOCATION:
            /**
             * payload: Location
             */
            return { ...state, location: payload };
        case SET_LOCATIONS:
            /**
             * payload: List<Location>
             */
            return { ...state, locations: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Location>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_LOCATION:
            /**
             * payload: Location
             */
            return { ...state, locations: [...state.locations,  payload] };
        case REMOVE_LOCATION:
            /**
             * payload: Location.id
             */
            return { ...state, locations: state.locations.filter(element => element.id !== payload) };
        case CLEAR_LOCATION:
            /**
             * payload: undefined
             */
            return { ...state, location: {}}
        case CLEAR_LOCATIONS:
            /**
             * payload: undefined
             */
            return { ...state, locations: []}
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
             * payload: ResponseEntity<Location>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default locationReducer;