import {
    SET_FIELDS,
    SET_FIELD_MAP,
    CLEAR_FIELDS,
    CLEAR_FIELD_MAP,
    SET_MAPPING,
    SET_MAPPINGS,
    ADD_MAPPING,
    REMOVE_MAPPING,
    CLEAR_MAPPING,
    CLEAR_MAPPINGS,
    SET_ENTITY,
    SET_ENTITIES,
    CLEAR_ENTITY,
    CLEAR_ENTITIES,
    SET_FETCHING,
    SET_ERROR
} from '../types/entityTypes';

const initialState = {
    fields: [],
    fieldMap: {},
    mapping: {},
    mappings: [],
    entity: {},
    entities: [],
    fetching: false,
    error: null
}

const mappingReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_FIELDS:
            /**
             * payload: List<EntityField>
             */
            return { ...state, fields: payload };
        case SET_FIELD_MAP:
            /**
             * payload: Map<String, EntityField>
             */
            return { ...state, fieldMap: payload };
        case CLEAR_FIELDS:
            /**
             * payload: undefined
             */
            return { ...state, fields: []}
        case CLEAR_FIELD_MAP:
            /**
             * payload: undefined
             */
            return { ...state, fieldMap: {}}
        case SET_MAPPING:
            /**
             * payload: Map<String, String>
             */
            return { ...state, mapping: payload };
        case SET_MAPPINGS:
            /**
             * payload: List<Map<String, String>>
             */
            return { ...state, mappings: payload };
        case ADD_MAPPING:
            /**
             * payload: Map<String, String>
             */
            return { ...state, mappings: [...state.mappings,  payload] };
        case REMOVE_MAPPING:
            /**
             * payload: Map<String, String>.id
             */
            return { ...state, mappings: state.mappings.filter(element => element.id !== payload) };
        case CLEAR_MAPPING:
            /**
             * payload: undefined
             */
            return { ...state, mapping: {}}
        case CLEAR_MAPPINGS:
            /**
             * payload: undefined
             */
            return { ...state, mappings: []}
        case SET_ENTITY:
            /**
             * payload: Object
             */
            return { ...state, entity: payload };
        case SET_ENTITIES:
            /**
             * payload: List<Object>
             */
            return { ...state, entities: payload };
        case CLEAR_ENTITY:
            /**
             * payload: undefined
             */
            return { ...state, entity: {}}
        case CLEAR_ENTITIES:
            /**
             * payload: undefined
             */
            return { ...state, entities: []}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<Mapping>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default mappingReducer;