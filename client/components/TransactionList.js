import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="space-y-3">
      <h4 className="mr-6 text-lg font-semibold border-b border-gray-400">
        History
      </h4>
      <ul className="space-y-2 overflow-y-scroll max-h-[380px] pr-6">
        {!!transactions?.length ? (
          <>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} data={transaction} />
            ))}
          </>
        ) : (
          <p className="text-gray-400">
            No transactions logged! Please add a transaction.
          </p>
        )}
      </ul>
    </div>
  );
};
