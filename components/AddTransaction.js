import { Formik, Field, Form } from "formik";

export const AddTransaction = () => {
  return (
    <div className="space-y-2">
      <h4 className="text-lg border-b border-gray-400">Add New Transaction</h4>
      <div>
        <Formik
          initialValues={{
            text: "",
            amount: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="space-y-2 shadow-md p-4 text-lg">
            <div>
              <label
                htmlFor="text"
                className="block text-base font-medium text-gray-700"
              >
                Text
              </label>
              <Field
                as="input"
                id="text"
                name="text"
                placeholder="Enter text here..."
                className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-base font-medium text-gray-700"
              >
                Amount&nbsp;<span>(negative - expense, positive - income)</span>
              </label>
              <Field
                id="amount"
                name="amount"
                placeholder="Enter amount here..."
                className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
