import {takeEvery} from 'redux-saga/effects';
import {LOAD_LIST_OF_TRANSACTIONS, ADD_TRANSACTION, REMOVE_TRANSACTION,} from 'root/redux/actions/transactionsActions';
import {PREVIOUS_SESSION_AUTH_REQUEST, AUTH_REQUEST} from 'root/redux/actions/authActions';
import {LOAD_LIST_OF_BANKS} from 'root/redux/actions/banksActions';
import {previousSessionAuth, auth} from 'root/redux/sagas/authSaga';
import {loadListOfTransactions, addTransaction, removeTransaction} from 'root/redux/sagas/transactionsSaga';
import {loadListOfBanks} from 'root/redux/sagas/banksSaga';

export default function* root() {
    yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST, previousSessionAuth);
    yield takeEvery(AUTH_REQUEST, auth);
    yield takeEvery(LOAD_LIST_OF_BANKS, loadListOfBanks);
    yield takeEvery(ADD_TRANSACTION, addTransaction);
    yield takeEvery(LOAD_LIST_OF_TRANSACTIONS, loadListOfTransactions);
    yield takeEvery(REMOVE_TRANSACTION, removeTransaction);
}
