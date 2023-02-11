import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { page } from "../utils/config";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axiosClient from "@utils/axiosClient";

// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axiosClient.get(`/v1/transactions`);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axiosClient.delete(`/v1/transactions/${id}`);
      dispatch({ type: "DELETE_TRANSACTION", payload: id });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.error,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await axiosClient.post(`/v1/transactions`, {
        ...transaction,
      });
      dispatch({ type: "ADD_TRANSACTION", payload: res.data.data });
    } catch (err) {
      toast.error(err.response.data.error[0]);
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.error,
      });
    }
  }

  async function registerUser(values, setSubmitting) {
    setSubmitting(true);
    try {
      const response = await axios.post(`${page.apiBaseUrl}/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "REGISTER_USER", payload: response.data.token });
      toast.success(response.data.message);
      setTimeout(() => router.push("/login"), 500);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading,
        user: state.user,
        registerUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
