import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { GlobalProvider } from "@context/GlobalState";
import { AuthProvider } from "@context/AuthContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // This useEffect is to remove right click from app
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <AuthProvider>
      <GlobalProvider>
        <Toaster />
        <Component {...pageProps} />
      </GlobalProvider>
    </AuthProvider>
  );
}

export default MyApp;
