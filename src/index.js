import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';

// console.log(RootReducer);
const middleware = [ thunk ];
middleware.push(createLogger());
const store = createStore(RootReducer, applyMiddleware(...middleware));
render( 
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
