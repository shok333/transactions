import {
    LOAD_LIST_OF_TRANSACTIONS_SUCCESS,
    ADD_TRANSACTION_SUCCESS
} from '../actions/transactionsActions';
import {CLEAR_STORE} from '../actions/indexActions';

function initialState() {
    return {
        listOfTransactionsHasLoaded: false,
        listOfTransactions: []
    };
}

export default function transactionsReducer(state = initialState(), action) {
    switch (action.type) {
        case LOAD_LIST_OF_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                listOfTransactionsHasLoaded: true,
                listOfTransactions: action.listOfTransactions
            };

        case ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                listOfTransactions: [...state.listOfTransactions, action.transaction]
            };

        case CLEAR_STORE:
            return initialState();

        default:
            return state;
    }
}