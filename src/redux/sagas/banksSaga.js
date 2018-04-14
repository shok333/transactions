import {call, put} from 'redux-saga/effects';
import {loadListOfBanksSuccessAction} from 'Actions/banksActions';
import {loadListOfBanksApi} from 'Api/banksApi';

export function* loadListOfBanks() {
    const response = yield call(loadListOfBanksApi);
    yield put(loadListOfBanksSuccessAction(response));
}
