import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between gap-2 bg-white px-4 py-2 shadow sticky top-0 z-50">
            <Link
                to={"/"}
                className="text-xl max-sm:text-sm font-bold flex items-center gap-2"
            >
                Lets Connekt
            </Link>

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/2">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search for friends, groups, pages"
                    className="bg-transparent outline-none w-full"
                />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <FaBell className="text-gray-600" size={20} />
                {/* if isMobile then open the sidesinfo.jsx in abosule otherwise link goto /profle */}

                <Link to="/sides-info" className="text-gray-600 sm:hidden">
                    <FaBars />
                </Link>

                <Link to={"/profile"} className="max-sm:hidden">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="rounded-full w-8 h-8"
                    />
                </Link>
            </div>
        </div>
    );
}
