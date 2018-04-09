import {loadListOfBanksSuccessAction} from '../actions/banksActions';

import {loadListOfBanksApi} from '../../api/banksApi';
import {call, put} from 'redux-saga/effects';

export function* loadListOfBanks() {
  const response = yield call(loadListOfBanksApi);
  yield put(loadListOfBanksSuccessAction(response));
}
