import {combineReducers} from 'redux';
import authReducer from 'root/redux/reducers/authReducer';
import transactionsReducer from 'root/redux/reducers/transactionsReducer';
import banksReducer from 'root/redux/reducers/banksReducer';

export default combineReducers({
    auth: authReducer,
    transactions: transactionsReducer,
    banks: banksReducer,
})