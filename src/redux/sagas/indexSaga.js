import {takeEvery} from 'redux-saga/effects';

import {LOAD_LIST_OF_TRANSACTIONS, ADD_TRANSACTION, REMOVE_TRANSACTION,} from '../actions/transactionsActions';
import {PREVIOUS_SESSION_AUTH_REQUEST, AUTH_REQUEST, LOGOUT} from '../actions/authActions';
import {LOAD_LIST_OF_BANKS} from '../actions/banksActions';

import {previousSessionAuth, auth, logout} from './authSaga';
import {loadListOfTransactions, addTransaction, removeTransaction} from './transactionsSaga';
import {loadListOfBanks} from './banksSaga';

export default function* root() {
    yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST, previousSessionAuth);
    yield takeEvery(AUTH_REQUEST, auth);
    yield takeEvery(LOAD_LIST_OF_TRANSACTIONS, loadListOfTransactions);
    yield takeEvery(LOAD_LIST_OF_BANKS, loadListOfBanks);
    yield takeEvery(LOGOUT, logout);
    yield takeEvery(ADD_TRANSACTION, addTransaction);
    yield takeEvery(REMOVE_TRANSACTION, removeTransaction);
}
