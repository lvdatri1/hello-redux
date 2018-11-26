
const counter = (state = { value: 0, isLoading: false }, action) => {
  console.log('inside reducer of counter');
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, value: state.value + 1 };
    }
    case "SET_COUNTER":
      return { ...state, value: action.value };
    case "REQUEST_COUNTER": {
      return { ...state, isLoading: true };
    }
    case "RECEIVE_COUNTER": {
      return {value: action.value, isLoading: false } ;
    }
    case "DECREMENT": {
      return {...state, value: state.value-1};
    }
    default:
    {
      return state;
    }
      
  }
};
export default counter;
