import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer></ToastContainer>
    </Provider>
  );
}

export default MyApp;
