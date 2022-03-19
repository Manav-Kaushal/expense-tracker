import Head from "next/head";
import { AddTransaction } from "../components/AddTransaction";
import { Balance } from "../components/Balance";
import { Header } from "../components/Header";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { GlobalProvider } from "../context/GlobalState";

export default function Home() {
  return (
    <GlobalProvider>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none">
        <div className="w-full space-y-6 max-w-md bg-white p-4 rounded-md min-h-screen shadow-md">
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
