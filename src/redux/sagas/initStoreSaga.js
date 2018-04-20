import {call} from 'redux-saga/effects';
import {saveStoreApi} from 'root/api/initStoreApi';
import store from 'root/redux/store';

export function* saveStore() {
    yield call(saveStoreApi, store.getState());
}
