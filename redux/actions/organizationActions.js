import api from 'js/cellmobs/api';
import {
    SET_ORGANIZATION,
    SET_ORGANIZATIONS,
    ADD_ORGANIZATION,
    REMOVE_ORGANIZATION,
    SET_PAGINATION,
    SET_MEMBER,
    SET_MEMBERS,
    ADD_MEMBER,
    REMOVE_MEMBER,
    SET_MEMBER_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/organizationTypes';

export const listOrganizations = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.listOrganizations(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_ORGANIZATIONS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveOrganization = (organization) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.saveOrganization(organization)
        .then(response => {
            dispatch({type: ADD_ORGANIZATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getOrganization = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.getOrganization(id)
        .then(response => {
            dispatch({type: SET_ORGANIZATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneOrganization = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.cloneOrganization(id)
        .then(response => {
            dispatch({type: ADD_ORGANIZATION, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteOrganization = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.deleteOrganization(id)
        .then(response => {
            dispatch({type: REMOVE_ORGANIZATION, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listMembers = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.listMembers(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_MEMBERS, payload: content});
            dispatch({type: SET_MEMBER_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listMembersForTenant = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.listMembersForTenant(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_MEMBERS, payload: content});
            dispatch({type: SET_MEMBER_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveMember = (member) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.saveMember(member)
        .then(response => {
            dispatch({type: ADD_MEMBER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getMember = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.getMember(id)
        .then(response => {
            dispatch({type: SET_MEMBER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneMember = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.cloneMember(id)
        .then(response => {
            dispatch({type: ADD_MEMBER, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteMember = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.organization.member.deleteMember(id)
        .then(response => {
            dispatch({type: REMOVE_MEMBER, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}