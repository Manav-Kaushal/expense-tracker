import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="py-4 px-12 flex justify-between shadow-md text-lg">
      <div>
        <h4>Income</h4>
        <p className="text-green-500 font-semibold">{income}</p>
      </div>
      <div className="h-15 border-r border-gray-200" />
      <div>
        <h4>Expense</h4>
        <p className="text-red-500 font-semibold">{expense}</p>
      </div>
    </div>
  );
};
