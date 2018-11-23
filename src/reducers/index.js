import counter from './counter';
import money from './money';
import { combineReducers } from 'redux';
export default combineReducers({counter: counter, money: money});


