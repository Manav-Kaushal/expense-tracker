import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total < 0 ? "-" : "";

  return (
    <>
      <h4 className="text-lg">Your Balance</h4>
      <h1 className="text-2xl font-semibold">
        {sign}₹{numberWithCommas(Math.abs(total))} 
      </h1>
    </>
  );
};
