import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.jsx"; // Assuming you have a Redux store setup

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
