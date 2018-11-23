import callToGetCounter from "../actions";
import Apicall from "../utils/Apicall";
const host = "http://localhost:3000/data";

const counter = (state = { value: 0, isLoading: false }, action) => {
  console.log('inside reducer', action);
  
  switch (action.type) {
    case "INCREMENT": {
      //const res = Apicall.postData(host,{counter: state+1});
      return { ...state, value: state.value + 1 };
    }
    case "SET_COUNTER":
      return { ...state, value: action.value };
    case "REQUEST_COUNTER": {
      console.log("are you here");
      return { ...state, isLoading: true };
    }
    case "RECEIVE_COUNTER": {
      return {value: action.value, isLoading: false } ;
    }
    case "DECREMENT": {
      //const res = Apicall.putData(host,{counter: state-1});
      return {...state, value: state.value-1};
    }
    default:
    {
      console.log("in default state", state);
      return state;
    }
      
  }
};
export default counter;
