export const Balance = () => {
  const currencySymbol = process.env.CURRENCY_SYMBOL;

  return (
    <>
      <h4 className="text-lg">Your Balance</h4>
      <h1 className="text-2xl font-semibold">₹0.00</h1>
    </>
  );
};
