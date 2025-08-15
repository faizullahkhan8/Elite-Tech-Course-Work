import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./App.jsx";
import { RouterProvider } from "react-router";
import { FirebaseContextProvider } from "./Contexts/FirebaseContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <FirebaseContextProvider>
        <RouterProvider router={Router}>
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <router />
            </>
        </RouterProvider>
    </FirebaseContextProvider>
);
