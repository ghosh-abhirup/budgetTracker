import React from "react";

const InfoCard = () => {
  const isIncome = Math.round(Math.random());
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      TrySaying: Add {isIncome ? "Income" : "Expense"} for{" "}
      {isIncome ? "$100" : "$50"} in Category {isIncome ? "Business" : "Car"}{" "}
      for {isIncome ? "Monday" : "Tuesday"}
    </div>
  );
};

export default InfoCard;
