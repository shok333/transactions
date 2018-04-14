import {loadListOfBanksSuccessAction} from 'Actions/banksActions';
import {loadListOfTransactionsSuccessAction} from 'Actions/transactionsActions';
import {call, put} from 'redux-saga/effects';
import {saveStoreApi} from 'Root/api/initStoreApi';
import store from 'Root/redux/store';

export function* saveStore() {
    yield call(saveStoreApi, store.getState());
}

export function* updateStore({store}) {
    yield put(loadListOfBanksSuccessAction(store.banks.listOfBanks));
    yield put(loadListOfTransactionsSuccessAction(store.transactions.listOfTransactions));
}
