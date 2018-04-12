import {loadListOfBanksSuccessAction} from 'Root/redux/actions/banksActions';
import {loadListOfTransactionsSuccessAction} from 'Root/redux/actions/transactionsActions';
import {call, put} from 'redux-saga/effects';
import {saveStoreApi} from 'Root/api/initStoreApi';
import store from '../store';

export function* saveStore() {
    yield call(saveStoreApi, store.getState());
}

export function* updateStore({store}) {
    console.log(store);
    yield put(loadListOfBanksSuccessAction(store.banks));
    yield put(loadListOfTransactionsSuccessAction(store.transactions));
}
