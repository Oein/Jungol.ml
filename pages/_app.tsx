import type { AppProps } from "next/app";
import "./Jua.css";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={3000}
        position="bottom-left"
        closeOnClick
        newestOnTop={false}
      />
    </>
  );
}

export default MyApp;
