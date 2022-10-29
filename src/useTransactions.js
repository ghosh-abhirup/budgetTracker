import { useContext } from "react";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./constants/categories";
import { BudgetTrackerContext } from "./context/context";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(BudgetTrackerContext);

  const selectedTransactions = transactions.filter((t) => t.type === title);
  const totalAmount = selectedTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  selectedTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    labels: filteredCategories.map((c) => c.type),
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
  };

  return {
    filteredCategories,
    totalAmount,
    chartData,
  };
};

export default useTransactions;
