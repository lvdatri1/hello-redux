const money = (state = { amount: 0, isLoading: false }, action) => {
  switch (action.type) {
    case "REQUEST_MONEY": {
      return { ...state, isLoading: true };
    }
    case "DEPOSIT": {
      console.log("inside deposit", state);
      return { ...state, amount: Number(state.amount) + Number(action.amount) };
    }

    case "WITHDRAW": {
      return { ...state, amount: state.amount - action.amount };
    }
    case "RECEIVE_MONEY": {
      return { ...state, amount: action.amount, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
export default money;
