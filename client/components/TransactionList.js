import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="space-y-2">
      <h4 className="text-lg border-b border-gray-400">History</h4>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} data={transaction} />
        ))}
      </ul>
    </div>
  );
};
