export const LOAD_LIST_OF_TRANSACTIONS = 'LOAD_LIST_OF_TRANSACTIONS';
export const LOAD_LIST_OF_TRANSACTIONS_SUCCESS = 'LOAD_LIST_OF_TRANSACTIONS_SUCCESS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const REMOVE_TRANSACTION_SUCCESS = 'REMOVE_TRANSACTION_SUCCESS';

export function loadListOfTransactionsAction () {
    return {
        type: LOAD_LIST_OF_TRANSACTIONS
    };
}

export function loadListOfTransactionsSuccessAction (data) {
    return {
        type: LOAD_LIST_OF_TRANSACTIONS_SUCCESS,
        listOfTransactions: data
    };
}

export function addTransactionAction (transaction) {
    return {
        type: ADD_TRANSACTION,
        transaction
    };
}

export function addTransactionSuccessAction (transaction) {
    return {
        type: ADD_TRANSACTION_SUCCESS,
        transaction
    };
}

export function removeTransactionAction (id) {
    return {
        type: REMOVE_TRANSACTION,
        id
    };
}

export function removeTransactionSuccessAction (id) {
    return {
        type: REMOVE_TRANSACTION_SUCCESS,
        id
    };
}
