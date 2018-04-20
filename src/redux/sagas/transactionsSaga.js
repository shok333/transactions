import {call, put} from 'redux-saga/effects';
import {loadListOfTransactionsApi, addNewTransactionApi, removeTransactionApi} from 'root/api/transactionApi';
import {saveStoreOnServer} from 'root/redux/actions/initStoreActions';
import {
    removeTransactionSuccessAction,
    loadListOfTransactionsSuccessAction,
    addTransactionSuccessAction,
} from 'root/redux/actions/transactionsActions';

export function* loadListOfTransactions() {
  const response = yield call(loadListOfTransactionsApi);
  yield put(loadListOfTransactionsSuccessAction(response));
}

export function* addTransaction(action) {
  const
      {transaction, transaction:{amount, bankId}} = action,
      response = yield call(addNewTransactionApi, transaction);

  if(response && response.ok) {
      yield put(addTransactionSuccessAction({
          id: response.id,
          amount,
          bankId
      }));
  }
}

export function* removeTransaction(action) {
    const
        response = yield call(removeTransactionApi, action.id);

    if(response && response.ok) {
        yield put(removeTransactionSuccessAction(action.id))
        yield put(saveStoreOnServer());
    }
}
