import {
    LOAD_LIST_OF_TRANSACTIONS_SUCCESS,
    ADD_TRANSACTION_SUCCESS,
    REMOVE_TRANSACTION_SUCCESS
} from 'root/redux/actions/transactionsActions';
import {CLEAR_STORE} from 'root/redux/actions/indexActions';

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
                listOfTransactions: [
                    ...action.listOfTransactions,
                    ...state.listOfTransactions,
                ]
            };

        case ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                listOfTransactions: [...state.listOfTransactions, action.transaction]
            };

        case REMOVE_TRANSACTION_SUCCESS:
            const newListOfTransactions = state.listOfTransactions.filter((item) => {
                if (+action.id == +item. id) {
                    return false;
                }

                return true;
            });

            return {
                ...state,
                listOfTransactions: newListOfTransactions,
            };

        case CLEAR_STORE:
            return initialState();

        default:
            return state;
    }
}
