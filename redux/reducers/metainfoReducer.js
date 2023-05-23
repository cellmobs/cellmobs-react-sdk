import {
    SET_METAINFO,
    SET_METAINFOS,
    SET_PAGINATION,
    ADD_METAINFO,
    REMOVE_METAINFO,
    CLEAR_METAINFO,
    CLEAR_METAINFOS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/metainfoTypes';

const initialState = {
    metainfo: {},
    metainfos: [],
    pagination: {},
    fetching: false,
    error: null
}

const metainfoReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_METAINFO:
            /**
             * payload: MetaInfo
             */
            return { ...state, metainfo: payload };
        case SET_METAINFOS:
            /**
             * payload: List<MetaInfo>
             */
            return { ...state, metainfos: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<MetaInfo>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_METAINFO:
            /**
             * payload: MetaInfo
             */
            return { ...state, metainfos: [...state.metainfos,  payload] };
        case REMOVE_METAINFO:
            /**
             * payload: MetaInfo.id
             */
            return { ...state, metainfos: state.metainfos.filter(element => element.id !== payload) };
        case CLEAR_METAINFO:
            /**
             * payload: undefined
             */
            return { ...state, metainfo: {}}
        case CLEAR_METAINFOS:
            /**
             * payload: undefined
             */
            return { ...state, metainfos: []}
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
             * payload: ResponseEntity<MetaInfo>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default metainfoReducer;