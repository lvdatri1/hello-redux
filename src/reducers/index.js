import counter from './counter';
import money from './money';
import people from './people';
import { combineReducers } from 'redux';
export default combineReducers({counter: counter, money: money, people: people});


