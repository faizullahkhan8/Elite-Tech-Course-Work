import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function SideInfo() {
    const user = {
        name: "Faiz Ullah Khan",
        profilePic: "/assets/profile.jpg",
    };

    // Merged Left + Right sidebar references
    const links = [
        { label: "Friends", path: "/friends" },
        { label: "Groups", path: "/groups" },
        { label: "Saved", path: "/saved" },
        { label: "Marketplace", path: "/marketplace" },
        { label: "Events", path: "/events" },
        { label: "Pages", path: "/pages" },
        { label: "Settings", path: "/settings" },
        { label: "Help & Support", path: "/help" },
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
                        className="block bg-white rounded-lg shadow-sm p-3 text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
