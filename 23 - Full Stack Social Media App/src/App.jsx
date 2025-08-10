import React from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "./Components/Home/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import SidesInfo from "./Components/Home/SidesInfo";
import NotFound from "./Pages/NotFound";
import SinglePost from "./Pages/SinglePost";
import CreatePost from "./Pages/CreatePost";
import ProfilePage from "./Pages/Profile";

export const Layout = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/sides-info", element: <SidesInfo /> },
            { path: "/post/:id", element: <SinglePost /> },
            { path: "/post/create", element: <CreatePost /> },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <RegisterForm />,
    },
]);

export default Router;
