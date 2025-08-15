import { FaHome, FaUserFriends, FaUsers } from "react-icons/fa";

import { FaGear, FaRightFromBracket } from "react-icons/fa6";
import { useFirebase } from "../../Contexts/FirebaseContext";

export default function Sidebar() {
    const { logoutUser } = useFirebase();

    return (
        <div className="w-64 bg-white rounded-lg p-4 h-[88vh] sticky top-[4rem] overflow-y-auto shadow-sm max-sm:hidden">
            <ul className="space-y-4">
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <FaHome /> <span>Home</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <FaUserFriends /> <span>Friends</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <FaUsers /> <span>Groups</span>
                </li>

                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <FaGear /> <span>Setting</span>
                </li>
                <li
                    onClick={logoutUser}
                    className="flex items-center text-red-600 space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                >
                    <FaRightFromBracket className="rotate-180 " />{" "}
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    );
}
