import cookie from 'react-cookies';
import {call, put} from 'redux-saga/effects';
import {clearStoreAction} from '../actions/indexActions';
import {previousSessionAuthApi, authApi} from '../../api/authApi';
import {authRequestSuccessAction, previousSessionAuthSuccessAction, previousSessionAuthFailedAction, logoutSuccessAction} from '../actions/authActions';
import {loadListOfTransactionsAction} from '../actions/transactionsActions';
import {loadListOfBanksAction} from '../actions/banksActions';

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
