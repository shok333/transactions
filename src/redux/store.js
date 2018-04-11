import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/indexReducer';
import indexSaga from './sagas/indexSaga';
import {saveStoreApi, loadStoreApi} from 'Api/initStoreApi';

const sagaMiddleware = createSagaMiddleware();

const saveStore = (state) => {
    saveStoreApi(state);
};

export const loadState = () => {
    loadStoreApi()
        .then((response) => {
            if (response && response.ok) {
                if (response.store === null) {
                    return null;
                }
                console.log(response.store);
                return response.store;
            }
        });
};

const store = createStore(
    reducers,
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

