export const TransactionList = () => {
  return (
    <div className="space-y-2">
      <h4 className="text-lg border-b border-gray-400">History</h4>
      <ul>
        <li className="px-4 py-2 shadow-md flex justify-between">
          Cash <span className="text-red-500">-₹400</span>
        </li>
      </ul>
    </div>
  );
};
