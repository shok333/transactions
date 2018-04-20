import cookie from 'react-cookies';
import {call, put, take} from 'redux-saga/effects';
import {clearStoreAction} from 'root/redux/actions/indexActions';
import {previousSessionAuthApi, authApi} from 'root/api/authApi';
import {loadListOfTransactionsSuccessAction} from 'root/redux/actions/transactionsActions';
import {loadListOfBanksSuccessAction} from 'root/redux/actions/banksActions';
import {saveStore} from 'root/redux/sagas/initStoreSaga';
import {AUTH_REQUEST, LOGOUT} from 'root/redux/actions/authActions';
import {
    authRequestSuccessAction,
    previousSessionAuthSuccessAction,
    previousSessionAuthFailedAction,
    logoutSuccessAction
} from 'root/redux/actions/authActions';

export function* previousSessionAuth() {
    const response = yield call(previousSessionAuthApi);

    if (response && response.ok) {
        const {store: {banks: {listOfBanks}, transactions: {listOfTransactions}}} = response;
        yield put(loadListOfBanksSuccessAction(listOfBanks));
        yield put(loadListOfTransactionsSuccessAction(listOfTransactions));
        yield put(previousSessionAuthSuccessAction(response.store));
    } else {
        yield put(previousSessionAuthFailedAction());
    }

    yield take(LOGOUT);
    yield call(logout);
}

export function* auth(payload) {
    const response = yield call(authApi, payload);

    if(response && response.ok) {
        yield put(authRequestSuccessAction());
        yield call(saveStore);
        yield take(LOGOUT);
        yield call(logout);
    }
}

export function* logout() {
    yield cookie.remove('token');
    yield put(clearStoreAction());
    yield put(logoutSuccessAction());
}
