import {
    SET_PROJECT,
    SET_PROJECTS,
    SET_PAGINATION,
    ADD_PROJECT,
    REMOVE_PROJECT,
    CLEAR_PROJECT,
    CLEAR_PROJECTS,
    CLEAR_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/projectTypes';

const initialState = {
    project: {},
    projects: [],
    pagination: {},
    fetching: false,
    error: null
}

const projectReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_PROJECT:
            /**
             * payload: Project
             */
            return { ...state, project: payload };
        case SET_PROJECTS:
            /**
             * payload: List<Project>
             */
            return { ...state, projects: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Project>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_PROJECT:
            /**
             * payload: Project
             */
            return { ...state, projects: [...state.projects,  payload] };
        case REMOVE_PROJECT:
            /**
             * payload: Project.id
             */
            return { ...state, projects: state.projects.filter(element => element.id !== payload) };
        case CLEAR_PROJECT:
            /**
             * payload: undefined
             */
            return { ...state, project: {}}
        case CLEAR_PROJECTS:
            /**
             * payload: undefined
             */
            return { ...state, projects: []}
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
             * payload: ResponseEntity<Project>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default projectReducer;