import React, { createContext } from "react";
import { useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = [];
export const BudgetTrackerContext = createContext(initialState);

export const Provider = (props) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action creater
  const deleteTransaction = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "add", payload: transaction });
  };

  return (
    <BudgetTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {props.children}
    </BudgetTrackerContext.Provider>
  );
};
