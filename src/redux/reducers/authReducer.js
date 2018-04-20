import {
    PREVIOUS_SESSION_AUTH_REQUEST_FAILED,
    PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS,
    AUTH_REQUEST_SUCCESS,
    LOGOUT_SUCCESS
} from 'root/redux/actions/authActions';
import {CLEAR_STORE} from "root/redux/actions/indexActions";

function initialState() {
    return {
        previousSessionAuthenticationHasChecked: false,
        userHasAuthenticated: false,
    };
}

export default function authReducer(state = initialState(), action) {
    switch (action.type) {
        case PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS:
            return {
                  ...state,
                  previousSessionAuthenticationHasChecked: true,
                  userHasAuthenticated: true,
            }

        case PREVIOUS_SESSION_AUTH_REQUEST_FAILED:
            return {
                ...state,
                previousSessionAuthenticationHasChecked: true
            };

        case AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                userHasAuthenticated: true,
                previousSessionAuthenticationHasChecked: true
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                previousSessionAuthenticationHasChecked: true
            };

        case CLEAR_STORE:
            return initialState();

        default:
            return state;
    }
}
