import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col gap-4">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
