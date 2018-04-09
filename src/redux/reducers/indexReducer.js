import {combineReducers} from 'redux';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';
import banksReducer from './banksReducer';

export default combineReducers({
    auth: authReducer,
    transactions: transactionsReducer,
    banks: banksReducer,
})