export const IncomeExpenses = () => {
  return (
    <div className="py-4 px-12 flex justify-between shadow-md text-lg border">
      <div>
        <h4>Income</h4>
        <p className="text-green-500 font-semibold">+₹0.00</p>
      </div>
      <div className="h-15 border-r border-gray-200" />
      <div>
        <h4>Expense</h4>
        <p className="text-red-500 font-semibold">-₹0.00</p>
      </div>
    </div>
  );
};
