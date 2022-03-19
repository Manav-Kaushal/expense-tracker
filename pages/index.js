import { AddTransaction } from "../components/AddTransaction";
import { Balance } from "../components/Balance";
import { Header } from "../components/Header";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full space-y-4 max-w-sm">
        <Header title="Expense Tracker" />
        <div>
          <Balance />
        </div>
        <div>
          <IncomeExpenses />
        </div>
        <div>
          <TransactionList />
        </div>
        <div>
          <AddTransaction />
        </div>
      </div>
    </main>
  );
}
