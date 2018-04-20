import {loadListOfBanksSuccessAction} from 'root/redux/actions/banksActions';
import {loadListOfTransactionsSuccessAction} from 'root/redux/actions/transactionsActions';
import {call, put} from 'redux-saga/effects';
import {saveStoreApi} from 'root/api/initStoreApi';
import store from 'root/redux/store';

export function* saveStore() {
    yield call(saveStoreApi, store.getState());
}

export function* updateStore({store}) {
    yield put(loadListOfBanksSuccessAction(store.banks.listOfBanks));
    yield put(loadListOfTransactionsSuccessAction(store.transactions.listOfTransactions));
}
