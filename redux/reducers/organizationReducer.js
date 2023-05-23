import {
    SET_ORGANIZATION,
    SET_ORGANIZATIONS,
    SET_PAGINATION,
    ADD_ORGANIZATION,
    REMOVE_ORGANIZATION,
    CLEAR_ORGANIZATION,
    CLEAR_ORGANIZATIONS,
    CLEAR_PAGINATION,
    SET_MEMBER,
    SET_MEMBERS,
    SET_MEMBER_PAGINATION,
    ADD_MEMBER,
    REMOVE_MEMBER,
    CLEAR_MEMBER,
    CLEAR_MEMBERS,
    CLEAR_MEMBER_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/organizationTypes';

const initialState = {
    organization: {},
    organizations: [],
    pagination: {},
    member: {},
    members: [],
    memberPagination: {},
    fetching: false,
    error: null
}

const organizationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_ORGANIZATION:
            /**
             * payload: Organization
             */
            return { ...state, organization: payload };
        case SET_ORGANIZATIONS:
            /**
             * payload: List<Organization>
             */
            return { ...state, organizations: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Organization>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_ORGANIZATION:
            /**
             * payload: Organization
             */
            return { ...state, organizations: [...state.organizations,  payload] };
        case REMOVE_ORGANIZATION:
            /**
             * payload: Organization.id
             */
            return { ...state, organizations: state.organizations.filter(element => element.id !== payload) };
        case CLEAR_ORGANIZATION:
            /**
             * payload: undefined
             */
            return { ...state, organization: {}}
        case CLEAR_ORGANIZATIONS:
            /**
             * payload: undefined
             */
            return { ...state, organizations: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_MEMBER:
            /**
             * payload: AclRoleOrganization
             */
            return { ...state, member: payload };
        case SET_MEMBERS:
            /**
             * payload: List<AclRoleOrganization>
             */
            return { ...state, members: payload };
        case SET_MEMBER_PAGINATION:
            /**
             * payload: Page<AclRoleOrganization>, not including content
             */
            return { ...state, memberPagination: payload };
        case ADD_MEMBER:
            /**
             * payload: AclRoleOrganization
             */
            return { ...state, members: [...state.members,  payload] };
        case REMOVE_MEMBER:
            /**
             * payload: AclRoleOrganization.id
             */
            return { ...state, members: state.members.filter(element => element.id !== payload) };
        case CLEAR_MEMBER:
            /**
             * payload: undefined
             */
            return { ...state, member: {}}
        case CLEAR_MEMBERS:
            /**
             * payload: undefined
             */
            return { ...state, members: []}
        case CLEAR_MEMBER_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, memberPagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<Organization>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default organizationReducer;