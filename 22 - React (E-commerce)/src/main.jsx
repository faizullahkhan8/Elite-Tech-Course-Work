import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingWhatsApp from "./Components/FlotingWhatsapp.jsx";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ToastContainer
            autoClose={2500}
            position="top-right"
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <App />
        <FloatingWhatsApp />
    </Provider>
);
