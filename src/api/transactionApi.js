import {Get, Post} from "./configApi";

export function loadListOfTransactionsApi () {
    return Get('list-of-transactions')
        .then((response) => response.json());
}

export function addNewTransactionApi (data) {
    return Post('add-new-transaction', data)
        .then((response) => response.json());
}

export function removeTransactionApi (id) {
    return Get(`remove-transaction?id=${id}`)
        .then((response) => response.json());
}