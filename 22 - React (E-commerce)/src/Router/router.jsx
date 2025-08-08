import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "./Layout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // ✅ Use capital 'L'
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <h1>Hello from product</h1>,
            },
            {
                path: "/cart",
                element: <h1>Hello from cart</h1>,
            },
            {
                path: "/product/:id",
                element: <h1>Single product page</h1>,
            },
        ],
    },
]);
