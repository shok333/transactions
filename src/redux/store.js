import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/indexReducer';
import indexSaga from './sagas/indexSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(indexSaga);

export default store;

