import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { Provider } from 'react-redux';
import { render } from 'react-dom';




console.log(RootReducer);
const store = createStore(RootReducer, applyMiddleware(thunk));

const host = 'http://localhost:3000';

const fetchCounter = () =>{
    return fetch(host + '/data')
.then(response=> response.json())
.then(data => store.dispatch({type:'SET_COUNTER', value: data.counter }))
.catch(error => {console.log(error)});
}
const fetchMoney = () =>{
    return fetch(host + '/data')
.then(response=> response.json())
.then(data => store.dispatch({type:'SET_MONEY', amount: data.money }))
.catch(error => {console.log(error)});
}
//fetchCounter();
//fetchMoney();

//const fetchx = () => {fetchCounter(); fetchMoney();}


render( 
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// console.log(store.dispatch({type: 'DECREMENT'}));
// console.log(store);
// const render = ()=> {
//  const stx = store.getState();
//  console.log('in start', stx);
// const onDeposit = (m)=> store.dispatch({type: 'DEPOSIT', amount: m});
// const onWithdraw = (m1)=> store.dispatch({type: 'WITHDRAW', amount: m1});
// const onIncrement = ()=> store.dispatch({type: 'INCREMENT'});
// const onDecrement = ()=> store.dispatch({type: 'DECREMENT'});

//     ReactDOM.render(<App counter={{value: stx.counter, onIncrement: onIncrement, onDecrement: onDecrement}} 
//         money={{amount:stx.money, onDeposit: onDeposit, onWithdraw: onWithdraw}}
// />, document.getElementById('root'));

//  } 
// render();
// store.subscribe(render);
//store.dispatch({type: 'DEPOSIT', amount: 100});

// console.log('after everything',store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
