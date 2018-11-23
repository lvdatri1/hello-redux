import Apicall from "../utils/Apicall";

const host = 'http://localhost:3000/data';


const money = (state ={amount: 0, isLoading: false}, action) => {
  switch (action.type) {
    case "REQUEST_MONEY":
    {
      return {...state, isLoading: true};
    }
    case "DEPOSIT":{
      console.log('inside deposit', state);
      //const res = Apicall.putData(host, {money: state + (Number(action.amount) === 0 ? 1 : Number(action.amount)) });
      //return state + (Number(action.amount) === 0 ? 1 : Number(action.amount));
      return {...state, amount: (Number(state.amount) + Number(action.amount))}
      //return {...state, amount: 100}
    }
      
    case "WITHDRAW":{
      //const res = Apicall.putData(host, {money: state - action.amount});
      //return state - action.amount;
      return {...state, amount: state.amount - action.amount}
    }
    case "RECEIVE_MONEY":
    {
      return {...state, amount: action.amount}
    }  
    default: {
      // console.log('in defaut of money', action);
      return state;
    }
  }
};
export default money;
