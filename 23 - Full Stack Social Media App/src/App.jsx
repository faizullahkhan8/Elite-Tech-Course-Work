import React from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Feed";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import SidesInfo from "./Components/Home/SidesInfo";
import NotFound from "./Pages/NotFound";
import SinglePost from "./Pages/SinglePost";
import CreatePost from "./Pages/CreatePost";
import ProfilePage from "./Pages/Profile";
import Sidebar from "./Components/Home/Sidebar";
import RightSidebar from "./Components/Home/RightSidebar";

export const MainLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export const HomeLayout = () => {
    return (
        <div className="flex mt-4 w-full px-4">
            <Sidebar />
            <Outlet />
            <RightSidebar />
        </div>
    );
};

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
                children: [
                    { path: "/", element: <Home /> },
                    { path: "/post/:id", element: <SinglePost /> },
                    { path: "/post/create", element: <CreatePost /> },
                ],
            },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/sides-info", element: <SidesInfo /> },
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
