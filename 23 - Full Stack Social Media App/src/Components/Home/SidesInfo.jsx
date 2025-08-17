// src/components/Sidebar/SideInfo.jsx
import { FaArrowLeft, FaSignOutAlt, FaThumbsUp, FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useFirebase } from "../../Contexts/FirebaseContext";

export default function SideInfo() {
    const { user, userInfo, logoutUser } = useFirebase();
    const navigate = useNavigate();

    // Sidebar Links
    const links = [
        { label: "Friends", path: "/friends", icon: <FaUsers /> },
        { label: "Likes", path: "/likes", icon: <FaThumbsUp /> },
        { label: "Settings", path: "/settings", icon: <FaGear /> },
    ];

    const handleLogout = async () => {
        await logoutUser();
        navigate("/login"); // redirect after logout
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Profile Header */}
            <div className="bg-white shadow-sm p-4 flex items-center gap-3 border-b border-gray-200">
                <Link to={"/"}>
                    <FaArrowLeft />
                </Link>
                <img
                    src={userInfo?.profilePic || "/assets/default-profile.png"}
                    alt={userInfo?.name || user?.email}
                    className="w-14 h-14 rounded-full border object-cover"
                />
                <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                        {userInfo?.name || user?.email || "Guest User"}
                    </h1>
                    <Link
                        to={`/profile/${user?.uid}`}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        View Profile
                    </Link>
                </div>
            </div>

            {/* Sidebar Links */}
            <div className="mt-3 space-y-2 px-3">
                {links.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.path}
                        className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-3 text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Logout */}
            <div className="mt-3 space-y-2 px-3">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 bg-white rounded-lg shadow-sm p-3 text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                    <FaSignOutAlt className="rotate-180" />
                    <span className="text-red-500">Logout</span>
                </button>
            </div>
        </div>
    );
}
