import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.User.id);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
