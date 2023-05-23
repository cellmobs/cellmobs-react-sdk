import { SET_USER, SET_TOKEN, LOGIN_RESPONSE, LOGOUT, LOGIN_ERROR, PASSWORD_ERROR, PASSWORD_RESPONSE, CONNECTIONS_RESPONSE, SET_CONNECTIONS, SET_FETCHING } from '../types/authTypes';
//import * as LocalStorage from '../LocalStorage';
import Cookie from 'js-cookie';

const initialState = {
    user: null,
    token: null,
    connections: [],
    passwordRequest: null,
    fetching: false,
    fetched: false,
    error: null
}

const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_TOKEN:
            //console.log("Setting token: " + payload);
            return { ...state, token: payload };
        case SET_USER:
            //console.log("Setting user");
            return { ...state, user: payload };
        case SET_CONNECTIONS:
            //console.log("Setting connections");
            return { ...state, connections: payload };
        case SET_FETCHING:
            return { ...state, fetching: payload };
        case LOGIN_RESPONSE:
            Cookie.set('cmauth', payload.jwt);
            let user = JSON.stringify(payload.identity);
            localStorage.setItem('user', user);
            return {
                ...state,
                user: payload.identity,
                token: payload.jwt,
                error: null
            };
        case LOGIN_ERROR:
            return { ...state, error: payload };
        case PASSWORD_ERROR:
            return { ...state, error: payload };
        case PASSWORD_RESPONSE:
            return { ...state, passwordRequest: payload };
        case CONNECTIONS_RESPONSE:
            //LocalStorage.saveObject('connections', payload);
            return { ...state, connections: payload };
        case LOGOUT:
            console.log("Logging out");
            return {
                ...state,
                user: {},
                token: null
            };
        default:
            break;
    }
    return state;
}


export default authReducer;