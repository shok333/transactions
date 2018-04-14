import {
    PREVIOUS_SESSION_AUTH_REQUEST_FAILED,
    PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS,
    AUTH_REQUEST_SUCCESS,
} from 'Actions/authActions';
import {CLEAR_STORE} from "Actions/indexActions";

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
                  banks: action.store.banks,
                  auth: action.store.auth,
                  transactions: action.store.transactions,
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

        case CLEAR_STORE:
            return initialState();

        default:
            return state;
    }
}
