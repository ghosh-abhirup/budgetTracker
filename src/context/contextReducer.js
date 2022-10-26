// Reducer is a function that takes in the old state and an action =>  returns a new state

const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "delete":
      transactions = state.filter((item) => item.id !== action.payload);
      return transactions;

    case "add":
      transactions = [action.payload, ...state];
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
