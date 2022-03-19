import dayjs from "dayjs";
import { Formik, Field, Form } from "formik";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (transaction) => {
    setLoading(true);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: transaction.text,
      amount: +transaction.amount,
      date: dayjs(Date.now()).toISOString(),
    };
    addTransaction(newTransaction);
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <h4 className="text-lg border-b border-gray-400">Add New Transaction</h4>
      <div>
        <Formik
          initialValues={{
            text: "",
            amount: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className="space-y-2 shadow-md p-4 text-lg">
            <div>
              <label
                htmlFor="text"
                className="block text-base font-medium text-gray-700 sr-only"
              >
                Text
              </label>
              <Field
                id="text"
                name="text"
                autoComplete="off"
                placeholder="Text"
                className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-base font-medium text-gray-700 sr-only"
              >
                Amount&nbsp;<span>(negative - expense, positive - income)</span>
              </label>
              <Field
                type="number"
                id="amount"
                name="amount"
                placeholder="Amount (- expense, + income)"
                className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Loading..." : "Add Transaction"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
