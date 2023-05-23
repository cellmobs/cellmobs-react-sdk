import {
    SET_VOCABULARY,
    SET_VOCABULARIES,
    SET_PAGINATION,
    ADD_VOCABULARY,
    REMOVE_VOCABULARY,
    CLEAR_VOCABULARY,
    CLEAR_VOCABULARIES,
    CLEAR_PAGINATION,
    SET_VALUE,
    SET_VALUES,
    SET_VALUE_PAGINATION,
    ADD_VALUE,
    REMOVE_VALUE,
    CLEAR_VALUE,
    CLEAR_VALUES,
    CLEAR_VALUE_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/vocabTypes';

const initialState = {
    vocabulary: {},
    vocabularies: [],
    pagination: {},
    value: {},
    values: [],
    valuePagination: {},
    fetching: false,
    error: null
}

const vocabReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_VOCABULARY:
            /**
             * payload: Vocabulary
             */
            return { ...state, vocabulary: payload };
        case SET_VOCABULARIES:
            /**
             * payload: List<Vocabulary>
             */
            return { ...state, vocabularies: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Vocabulary>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_VOCABULARY:
            /**
             * payload: Vocabulary
             */
            return { ...state, vocabularies: [...state.vocabularies,  payload] };
        case REMOVE_VOCABULARY:
            /**
             * payload: Vocabulary.type
             */
            return { ...state, vocabularies: state.vocabularies.filter(element => element.type !== payload) };
        case CLEAR_VOCABULARY:
            /**
             * payload: undefined
             */
            return { ...state, vocabulary: {}}
        case CLEAR_VOCABULARIES:
            /**
             * payload: undefined
             */
            return { ...state, vocabularies: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_VALUE:
            /**
             * payload: TypeValue
             */
            return { ...state, value: payload };
        case SET_VALUES:
            /**
             * payload: List<TypeValue>
             */
            return { ...state, values: payload };
        case SET_VALUE_PAGINATION:
            /**
             * payload: Page<TypeValue>, not including content
             */
            return { ...state, valuePagination: payload };
        case ADD_VALUE:
            /**
             * payload: TypeValue
             */
            return { ...state, values: [...state.values,  payload] };
        case REMOVE_VALUE:
            /**
             * payload: TypeValue.type
             */
            return { ...state, values: state.values.filter(element => element.id !== payload) };
        case CLEAR_VALUE:
            /**
             * payload: undefined
             */
            return { ...state, value: {}}
        case CLEAR_VALUES:
            /**
             * payload: undefined
             */
            return { ...state, values: []}
        case CLEAR_VALUE_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, valuePagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<Vocabulary> or ResponseEntity<TypeValue>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default vocabReducer;