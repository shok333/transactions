export const PREVIOUS_SESSION_AUTH_REQUEST = 'PREVIOUS_SESSION_AUTH_REQUEST';
export const PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS = 'PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS';
export const PREVIOUS_SESSION_AUTH_REQUEST_FAILED = 'PREVIOUS_SESSION_AUTH_REQUEST_FAILED';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const LOGOUT = 'LOGOUT';

export function previousSessionAuthAction () {
    return {
        type: PREVIOUS_SESSION_AUTH_REQUEST
    };
}

export function previousSessionAuthSuccessAction () {
    return {
        type: PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS
    };
}

export function previousSessionAuthFailedAction () {
    return {
        type: PREVIOUS_SESSION_AUTH_REQUEST_FAILED
    };
}

export function authRequestAction (payload) {
    return {
        type: AUTH_REQUEST,
        payload
    }
}

export function authRequestSuccessAction () {
    return {
        type: AUTH_REQUEST_SUCCESS,
    }
}

export function logoutAction () {
    return {
        type: LOGOUT,
    }
}
