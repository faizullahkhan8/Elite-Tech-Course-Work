import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "./Layout.jsx";
import SingleProduct from "../Pages/SingleProduct.jsx";
import Cart from "../Pages/Cart.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import NotFound from "../Pages/NotFound.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/product/:id",
                element: (
                    <ProtectedRoute>
                        <SingleProduct />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
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
