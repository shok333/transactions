import cookie from 'react-cookies'
import {
    LOAD_LIST_OF_TRANSACTIONS,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION,
    loadListOfTransactionsSuccessAction,
    addTransactionSuccessAction,
} from './actions/transactionsActions';

import {
    LOAD_LIST_OF_BANKS,
    loadListOfBanksSuccessAction,
} from './actions/banksActions';

import {
    PREVIOUS_SESSION_AUTH_REQUEST,
    AUTH_REQUEST,
    authRequestSuccessAction,
    previousSessionAuthSuccessAction,
    previousSessionAuthFailedAction, LOGOUT,
} from './actions/authActions';

import {clearStoreAction} from './actions/indexActions';

import {
    loadListOfTransactionsApi,
    addNewTransactionApi,
    removeTransactionApi
} from '../api/transactionApi';

import {loadListOfBanksApi} from '../api/banksApi';
import {previousSessionAuthApi, authApi} from '../api/authApi';

import {call, put, takeEvery} from 'redux-saga/effects';

function* loadListOfTransactions() {
    const response = yield call(loadListOfTransactionsApi);
    yield put(loadListOfTransactionsSuccessAction(response));
}

function* loadListOfBanks() {
    const response = yield call(loadListOfBanksApi);
    yield put(loadListOfBanksSuccessAction(response));
}

function* previousSessionAuth() { //todo вынести отсюда
    const response = yield call(previousSessionAuthApi);
    if(response && response.ok) {
        yield put(previousSessionAuthSuccessAction());
    } else {
        yield put(previousSessionAuthFailedAction());
    }
}

function* logout() {
    yield cookie.remove('token');
    yield put(clearStoreAction());
}

function* auth(action) { //todo вынести отсюда
    const response = yield call(authApi, action.payload);
    if(response && response.ok) {
        yield put(authRequestSuccessAction());
    } else {

    }
}

function* addTransaction(action) {
    const
        {transaction, transaction:{amount, bankId}} = action,
        response = yield call(addNewTransactionApi, transaction);

    if(response && response.ok) {
        yield put(addTransactionSuccessAction({
            id: response.id,
            amount,
            bankId
        }));
    }
}

function* removeTransaction(action) {
    const
        { id } = action,
        response = yield call(removeTransactionApi, id);

}

export default function* root() {
    yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST, previousSessionAuth);
    yield takeEvery(AUTH_REQUEST, auth);
    yield takeEvery(LOAD_LIST_OF_TRANSACTIONS, loadListOfTransactions);
    yield takeEvery(LOAD_LIST_OF_BANKS, loadListOfBanks);
    yield takeEvery(LOGOUT, logout);
    yield takeEvery(ADD_TRANSACTION, addTransaction);
    yield takeEvery(REMOVE_TRANSACTION, removeTransaction);
}