import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Feed";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import SidesInfo from "./Components/Home/SidesInfo";
import NotFound from "./Pages/NotFound";
import SinglePost from "./Pages/SinglePost";
import CreatePost from "./Pages/CreatePost";
import ProfilePage from "./Pages/Profile";
import UserVisitorProfile from "./Pages/UserVisitorProfile";
import Sidebar from "./Components/Home/Sidebar";
import RightSidebar from "./Components/Home/RightSidebar";
import CompleteProfile from "./Pages/CompleteYourProfile";
import { useFirebase } from "./Contexts/FirebaseContext";
import Loading from "./Components/Loading";

export const MainLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen relative">
            <Navbar />
            <Outlet />
        </div>
    );
};

export const HomeLayout = () => {
    const { loading } = useFirebase();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex mt-4 w-full px-4">
            <Sidebar />
            <Outlet />
            <RightSidebar />
        </div>
    );
};

const Protected = ({ children }) => {
    const { user, loading } = useFirebase();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
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
                    {
                        path: "/",
                        element: (
                            <Protected>
                                <Home />
                            </Protected>
                        ),
                    },
                    {
                        path: "/complete-your-profile",
                        element: (
                            <Protected>
                                <CompleteProfile />,
                            </Protected>
                        ),
                    },
                    {
                        path: "/post/:id",
                        element: (
                            <Protected>
                                <SinglePost />
                            </Protected>
                        ),
                    },
                    {
                        path: "/post/create",
                        element: (
                            <Protected>
                                <CreatePost />
                            </Protected>
                        ),
                    },
                    {
                        path: "/profile/visitor/:id",
                        element: (
                            <Protected>
                                <UserVisitorProfile />
                            </Protected>
                        ),
                    },
                ],
            },
            {
                path: "/profile",
                element: (
                    <Protected>
                        <ProfilePage />
                    </Protected>
                ),
            },

            {
                path: "/sides-info",
                element: (
                    <Protected>
                        <SidesInfo />
                    </Protected>
                ),
            },
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
