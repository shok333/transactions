import cookie from 'react-cookies';
import {call, put} from 'redux-saga/effects';
import {clearStoreAction} from 'Actions/indexActions';
import {previousSessionAuthApi, authApi} from 'Api/authApi';
import {authRequestSuccessAction, previousSessionAuthSuccessAction, previousSessionAuthFailedAction, logoutSuccessAction} from 'Actions/authActions';
import {loadListOfTransactionsAction} from 'Actions/transactionsActions';
import {loadListOfBanksAction} from 'Actions/banksActions';

export function* previousSessionAuth() {
    const response = yield call(previousSessionAuthApi);
    if (response && response.ok) {
        yield put(previousSessionAuthSuccessAction(response.store));
    } else {
        yield put(previousSessionAuthFailedAction());
    }
}

export function* auth(action) {
    const response = yield call(authApi, action.payload);
    if(response && response.ok) {
        yield put(authRequestSuccessAction());
        yield put(loadListOfTransactionsAction());
        yield put(loadListOfBanksAction());
    }
}

export function* logout() {
    yield cookie.remove('token');
    yield put(clearStoreAction());
    yield put(logoutSuccessAction());
}

export function* logoutSuccess() {
    yield put(previousSessionAuthFailedAction());
}
