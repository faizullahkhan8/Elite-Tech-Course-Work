import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useFirebase } from "../../Contexts/FirebaseContext";
import { Link } from "react-router";

export default function RightSidebar() {
    const [searchResults, setSearchResults] = useState([]);
    const { searchUsers } = useFirebase();

    const handleSearch = async (query) => {
        const searchResult = await searchUsers(query);
        setSearchResults(searchResult);
    };

    return (
        <div className="w-64 bg-white rounded-lg p-4 h-[88vh] sticky top-[4rem] overflow-y-auto shadow-sm max-sm:hidden">
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-1 mb-4">
                {/* search input for friends */}
                <input
                    type="text"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search friends..."
                    className="w-full outline-none border-none px-2 py-1"
                />
                <FaSearch className="text-gray-400" />
            </div>
            <ul className="space-y-2">
                {searchResults.length < 1 ? (
                    <p className="">No user found</p>
                ) : (
                    searchResults.map((user) => (
                        <Link to={`/profile/visitor/${user.id}`} key={user.id}>
                            <li className="flex items-center space-x-3">
                                <img
                                    src={user.imageUrl}
                                    alt=""
                                    className="rounded-full w-8 h-8 object-cover"
                                />
                                <span>{user.name}</span>
                            </li>
                        </Link>
                    ))
                )}
            </ul>
        </div>
    );
}
