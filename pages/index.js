import { AddTransaction } from "../components/AddTransaction";
import { Balance } from "../components/Balance";
import { Header } from "../components/Header";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { GlobalProvider } from "../context/GlobalState";

export default function Home() {
  return (
    <GlobalProvider>
      <main className="min-h-screen flex items-center justify-center my-12">
        <div className="w-full space-y-6 max-w-sm">
          <Header title="Expense Tracker" />
          <div>
            <Balance />
          </div>
          <div>
            <IncomeExpenses />
          </div>
          <div>
            <AddTransaction />
          </div>
          <div>
            <TransactionList />
          </div>
        </div>
      </main>
    </GlobalProvider>
  );
}
