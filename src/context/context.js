import React, { createContext } from "react";
import { useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  [
    {
      amount: 50,
      category: "Travel",
      type: "Expense",
      date: "2022-11-05",
      id: "2a00b4b2-cfb1-4f11-9bcc-ca18a7ff3b1f",
    },
    {
      amount: 100,
      category: "Shopping",
      type: "Expense",
      date: "2022-10-31",
      id: "206fbd9f-134b-44b8-9896-80fefb91e157",
    },
    {
      amount: 100,
      category: "Extra income",
      type: "Income",
      date: "2022-10-30",
      id: "5cc24387-ed97-4670-9567-02e94fedf58e",
    },
    {
      amount: 500,
      category: "Business",
      type: "Income",
      date: "2022-11-03",
      id: "094af8ec-ffe9-47a3-b504-76904323219b",
    },
  ],
];
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

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);
  return (
    <BudgetTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {props.children}
    </BudgetTrackerContext.Provider>
  );
};
