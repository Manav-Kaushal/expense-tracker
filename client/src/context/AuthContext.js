import axiosClient from "@utils/axiosClient";
import { allowedRoles, cookieNames } from "@utils/config";
// import { useLocalStorage } from "@utils/hooks/useLocalStorage";
import {
  clearAllStorage,
  getCookie,
  redirectToLocation,
  setCookie,
  setLocalStorage,
} from "@utils/lib";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export const AuthContext = createContext({
  isAuthenticated: false,
  isAuthenticating: false,
  signingUp: false,
  user: {},
  login: async () => {},
  register: async () => {
    return { error: false, message: "", hasAttempted: false };
  },
  logout: async () => {},
});

// const endPointAuthCheck = "/auth/check";

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useLocalStorage("session", {});
  const [signingUp, setSigningUp] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  // const loadUserFromCookiesCallback = useCallback(async () => {
  //   const token = getCookie(cookieNames.token);
  //   if (token) {
  //     const response = await axios.get(endPointAuthCheck);
  //     if (response.status <= 301) setUser(response.data.user);
  //   }
  //   setAuthenticating(false);
  // }, []);

  // useEffect(() => {
  //   loadUserFromCookiesCallback();
  // }, [loadUserFromCookiesCallback]);

  const login = async ({ email, password, redirectUrl = "/" }) => {
    clearAllStorage();
    setAuthenticating(true);
    axiosClient
      .post(`/auth/login`, { email, password })
      .then((response) => {
        const { token, userData, message } = response.data;
        setCookie(cookieNames.token, token);
        setUser(userData);
        setAuthenticating(false);
        toast.success(message);
        router.push(redirectUrl);
      })
      .catch((error) => {
        if (error.response) {
          setAuthenticating(false);
          toast.error(error.response.data.message);
          return {
            error: true,
            message: error.response.data.message,
            hasAttempted: true,
          };
        }
      })
      .finally(() => setAuthenticating(false));
  };

  const register = async ({
    name,
    email,
    password,
    redirectUrl = "/login",
  }) => {
    setSigningUp(true);
    const response = await axiosClient.post("/auth/register", {
      name,
      email,
      password,
    });
    if (response.status <= 300) {
      const loginData = { email, password };
      await login(loginData);
      setSigningUp(false);

      return {
        error: false,
        message: "Sign up successful",
        hasAttempted: true,
      };
    } else {
      setAuthenticating(false);
      setSigningUp(false);

      return { error: true, message: "Failed to Signup", hasAttempted: true };
    }
  };

  async function logout() {
    clearAllStorage();
    setLocalStorage("logout", Date.now().toString());
    setUser({});
    redirectToLocation({
      router,
      pathname: "/login",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user._id,
        user,
        isAuthenticating: authenticating,
        login,
        logout,
        register,
        signingUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
