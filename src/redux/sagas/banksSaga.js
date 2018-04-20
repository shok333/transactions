import {call, put} from 'redux-saga/effects';
import {loadListOfBanksSuccessAction} from 'root/redux/actions/banksActions';
import {loadListOfBanksApi} from 'root/api/banksApi';

export function* loadListOfBanks() {
    const response = yield call(loadListOfBanksApi);
    yield put(loadListOfBanksSuccessAction(response));
}
