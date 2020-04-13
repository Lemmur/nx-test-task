import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, {sagaMiddleware} from './app.store'
import AppComponent from './app.component';
import rootSaga from "./app.saga";

const store = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>, document.getElementById("root"));
