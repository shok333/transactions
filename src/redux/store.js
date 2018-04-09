import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/indexReducer';
import indexSaga from './sagas/indexSaga';

const sagaMiddleware = createSagaMiddleware();

const saveStore = (state) => {
    try {
        localStorage.setItem('transactionStore', JSON.stringify(state));
    } catch (err) {

    }
};

export const loadState = () => {
    try {
        const store = localStorage.getItem('transactionStore');

        if (store === null) {
            return undefined;
        }

        return JSON.parse(store);

    } catch (err) {
        return undefined;
    }
};

const store = createStore(
    reducers,
    loadState(),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

store.subscribe(() => {
    saveStore(store.getState());
});

sagaMiddleware.run(indexSaga);

export default store;

