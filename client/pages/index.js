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
      <main className="flex items-center justify-center min-h-screen py-12 select-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="relative grid w-full grid-cols-1 gap-8 p-4 mx-auto bg-white rounded-md shadow-md max-w-7xl sm:grid-cols-2">
          <div className="space-y-4">
            <Balance />
            <IncomeExpenses />
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
