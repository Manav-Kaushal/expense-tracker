import Cookies from "js-cookie";
import { Router } from "next/router";
import { cookieNames } from "./config";

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const updateLocalStorage = (key, value) => {
  try {
    const currentValue = JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify({ ...currentValue, ...value }));
  } catch (error) {
    console.error(error);
  }
};

export const setCookie = (name, value, options) => {
  Cookies.set(name, value, options);
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};

export const redirectToLocation = ({
  router,
  pathname,
  query = {},
  url,
  res,
  options = {},
}) => {
  if (typeof window !== "undefined") {
    router.push({ pathname, query }, url, options);
  } else {
    res?.writeHead(302, {
      Location: url,
    });
    res?.end();
  }
};

export function clearAllStorage() {
  removeCookie(cookieNames.token);
  window.localStorage.clear();
}
