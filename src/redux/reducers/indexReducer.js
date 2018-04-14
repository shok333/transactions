import {combineReducers} from 'redux';
import authReducer from 'Reducers/authReducer';
import transactionsReducer from 'Reducers/transactionsReducer';
import banksReducer from 'Reducers/banksReducer';

export default combineReducers({
    auth: authReducer,
    transactions: transactionsReducer,
    banks: banksReducer,
})