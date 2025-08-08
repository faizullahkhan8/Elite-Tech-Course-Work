import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "./Layout.jsx";
import SingleProduct from "../Pages/SingleProduct.jsx";
import Cart from "../Pages/Cart.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import NotFound from "../Pages/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:id",
                element: <SingleProduct />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/product/:id",
                element: <h1>Single product page</h1>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
