import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="flex items-center gap-2 bg-primary  px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
            >
                <FaHome />
                Go Back Home
            </Link>
        </div>
    );
}
