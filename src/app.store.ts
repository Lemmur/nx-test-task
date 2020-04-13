import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import {homeReducer} from "./pages/home/home.reducers";
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({});

const rootReducer = combineReducers({
    home: homeReducer
});

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(...[logger, sagaMiddleware]));
}
