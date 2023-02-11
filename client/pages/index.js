import { AddTransaction } from "@components/AddTransaction";
import { Balance } from "@components/Balance";
import { IncomeExpenses } from "@components/IncomeExpenses";
import Logo from "@components/Logo";
import { TransactionList } from "@components/TransactionList";
import useAuth from "@context/AuthContext";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed top-0 left-0 flex items-center justify-between w-full gap-4 px-4 py-1 select-none"
      >
        <Logo className="aspect-[2/1] w-32" />
        <div className="flex items-center space-x-4 text-white">
          {user?._id ? (
            <>
              <p>({user.email})</p>
              <button
                onClick={() => {
                  logout();
                }}
                className="hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/register")}
                className="hover:underline"
              >
                Register
              </button>
              <button
                onClick={() => router.push("/login")}
                className="hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
      <div className="flex items-center justify-center min-h-screen py-12 select-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
      </div>
    </>
  );
}
