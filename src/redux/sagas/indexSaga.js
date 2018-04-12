import {takeEvery} from 'redux-saga/effects';

import {
    LOAD_LIST_OF_TRANSACTIONS,
    LOAD_LIST_OF_TRANSACTIONS_SUCCESS,
    ADD_TRANSACTION,
    ADD_TRANSACTION_SUCCESS,
    REMOVE_TRANSACTION,
    REMOVE_TRANSACTION_SUCCESS
} from '../actions/transactionsActions';
import {
    PREVIOUS_SESSION_AUTH_REQUEST,
    AUTH_REQUEST, LOGOUT, AUTH_REQUEST_SUCCESS,
    LOGOUT_SUCCESS,
    PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS
} from '../actions/authActions';
import {LOAD_LIST_OF_BANKS, LOAD_LIST_OF_BANKS_SUCCESS} from '../actions/banksActions';

import {previousSessionAuth, auth, logout} from './authSaga';
import {loadListOfTransactions, addTransaction, removeTransaction} from './transactionsSaga';
import {loadListOfBanks} from './banksSaga';
import {saveStore, updateStore} from './initStoreSaga';

export default function* root() {
    yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST, previousSessionAuth);
    yield takeEvery(AUTH_REQUEST, auth);
    yield takeEvery(LOAD_LIST_OF_TRANSACTIONS, loadListOfTransactions);
    yield takeEvery(LOAD_LIST_OF_BANKS, loadListOfBanks);
    yield takeEvery(LOGOUT, logout);
    yield takeEvery(ADD_TRANSACTION, addTransaction);
    yield takeEvery(REMOVE_TRANSACTION, removeTransaction);
    yield takeEvery(LOAD_LIST_OF_BANKS_SUCCESS, saveStore);
    yield takeEvery(LOAD_LIST_OF_TRANSACTIONS_SUCCESS, saveStore);
    yield takeEvery(AUTH_REQUEST_SUCCESS, saveStore);
    yield takeEvery(LOGOUT_SUCCESS, saveStore);
    yield takeEvery(ADD_TRANSACTION_SUCCESS, saveStore);
    yield takeEvery(REMOVE_TRANSACTION_SUCCESS, saveStore);
    yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS, updateStore);
}
