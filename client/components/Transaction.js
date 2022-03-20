import React, { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../context/GlobalState";
import dayjs from "dayjs";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ data }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = data.amount < 0 ? "-" : "+";

  return (
    <div>
      <li
        className={`group px-4 py-2 shadow-sm transition duration-200 flex justify-between border-r-4 hover:shadow-md cursor-default ${
          data.amount < 0 ? "border-red-500" : "border-green-500"
        } `}
      >
        <div className="flex flex-grow items-center space-x-2">
          {data.createdAt && (
            <>
              <span className="text-xs text-gray-400">
                ({dayjs(data.createdAt).format("DD/MM/YY hh:mm A")})
              </span>
            </>
          )}

          <span className="capitalize">{data.text}</span>
          <XCircleIcon
            className="hidden w-4 h-4 cursor-pointer transition duration-200 hover:text-red-500 group-hover:inline"
            onClick={() => deleteTransaction(data._id)}
          />
        </div>
        <span className={data.amount < 0 ? "text-red-500" : "text-green-500"}>
          {sign}₹{numberWithCommas(Math.abs(data.amount))}
        </span>
      </li>
    </div>
  );
};
