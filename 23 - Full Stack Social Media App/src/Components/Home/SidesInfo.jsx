import { FaArrowLeft, FaSignOutAlt, FaThumbsUp, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import { useFirebase } from "../../Contexts/FirebaseContext";
import { FaGear } from "react-icons/fa6";

export default function SideInfo() {
    const { logoutUser } = useFirebase();
    const user = {
        name: "Faiz Ullah Khan",
        profilePic: "/assets/profile.jpg",
    };

    // Merged Left + Right sidebar references
    const links = [
        { label: "Friends", path: "/friends", icon: <FaUsers /> },
        { label: "Likes", path: "/groups", icon: <FaThumbsUp /> },
        { label: "Settings", path: "/settings", icon: <FaGear /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Profile Header */}
            <div className="bg-white shadow-sm p-4 flex items-center gap-3 border-b border-gray-200">
                <Link to={"/"}>
                    <FaArrowLeft />
                </Link>
                <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-14 h-14 rounded-full border object-cover"
                />
                <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                        {user.name}
                    </h1>
                    <Link
                        to="/profile"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        View Profile
                    </Link>
                </div>
            </div>

            {/* List */}
            <div className="mt-3 space-y-2 px-3">
                {links.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.path}
                        className="flex items-center justify-start gap-4 bg-white rounded-lg shadow-sm p-3 text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>
            <div className="mt-3 space-y-2 px-3" onClick={logoutUser}>
                <div className="flex items-center justify-start gap-4 bg-white rounded-lg shadow-sm p-3 text-gray-700 font-medium hover:bg-gray-100 transition">
                    <FaSignOutAlt className="rotate-180" />
                    <span className="text-red-500">Logout</span>
                </div>
            </div>
        </div>
    );
}
