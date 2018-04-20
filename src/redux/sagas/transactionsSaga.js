import {call, put} from 'redux-saga/effects';
import {loadListOfTransactionsApi, addNewTransactionApi, removeTransactionApi} from 'root/api/transactionApi';
import {saveStore} from 'root/redux/sagas/initStoreSaga';
import {removeTransactionSuccessAction, loadListOfTransactionsSuccessAction, addTransactionSuccessAction} from 'root/redux/actions/transactionsActions';

export function* loadListOfTransactions() {
    const response = yield call(loadListOfTransactionsApi);
    yield put(loadListOfTransactionsSuccessAction(response));
    yield call(saveStore);
}

export function* addTransaction(action) {
  const
      {transaction, transaction:{amount, bankId}} = action,
      response = yield call(addNewTransactionApi, transaction);

  if (response && response.ok) {
      yield put(addTransactionSuccessAction({
          id: response.id,
          amount,
          bankId
      }));

      yield call(saveStore);
  }
}

export function* removeTransaction(action) {
    const response = yield call(removeTransactionApi, action.id);

    if(response && response.ok) {
        yield put(removeTransactionSuccessAction(action.id))
        yield call(saveStore);
    }
}
