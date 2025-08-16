import { Link } from "react-router-dom";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";

export default function ProfilePage() {
    const { getUserInfo } = useFirebase();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetches = async () => {
            const userInfo = await getUserInfo();
            setUser(userInfo);
        };
        fetches();
    }, [getUserInfo]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Cover Photo Section */}
            <div className="relative w-full h-52 bg-gray-200">
                <img
                    src={user.coverUrl}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />

                <div className="absolute -bottom-16 max-sm:-bottom-[105px] px-6 w-full h-max flex items-end gap-4 max-sm:flex-col max-sm:items-start">
                    <div className="relative">
                        <img
                            src={user?.imageUrl}
                            alt={user.name}
                            className="w-36 h-36 rounded-full border-4 border-white object-cover"
                        />
                        <label
                            htmlFor="profileImage"
                            className="absolute right-4 bottom-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
                        >
                            <FaPencil />
                        </label>
                        <input
                            type="file"
                            className="hidden"
                            id="profileImage"
                        />
                    </div>
                    <div className="pb-4">
                        <h1 className="text-4xl max-sm: font-bold text-blue-600 ">
                            {user.name}
                        </h1>
                        <p className="text-gray-600">{user.bio}</p>
                    </div>
                </div>
            </div>

            {/* Edit Profile / Buttons */}
            <div className="mt-32 px-6 flex max-sm:flex-col justify-between border-b border-gray-200">
                <div className="flex gap-4">
                    {["Posts", "About", "Friends", "Photos"].map((tab, i) => (
                        <Link
                            key={i}
                            to={`/${tab.toLowerCase()}`}
                            className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600"
                        >
                            {tab}
                        </Link>
                    ))}
                </div>
                <Link
                    to={"/complete-your-profile"}
                    className="bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Edit Profile
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Left Sidebar */}
                <div className="space-y-4">
                    {/* About */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">About</h2>
                        <p className="text-gray-600">{user.bio}</p>
                    </div>

                    {/* Friends */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Friends</h2>
                        <div className="grid grid-cols-3 gap-2">
                            {user.friends?.map((f, idx) => (
                                // <img
                                //     key={idx}
                                //     src={f}
                                //     alt={`Friend ${idx}`}
                                //     className="w-full h-20 object-cover rounded-lg"
                                // />
                                <p key={idx} className="text-sm">
                                    {f}
                                </p>
                            ))}
                        </div>
                        <Link
                            to="/friends"
                            className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                        >
                            See all friends
                        </Link>
                    </div>
                </div>

                {/* Right Content (Posts) */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Create Post */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-500">
                            What's on your mind, {user.name}?
                        </p>
                    </div>

                    {/* Example Post */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <img
                                src={user.profilePic}
                                alt={user.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <span className="text-sm text-gray-500">
                                    2 hrs ago
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-700">Hello world! 🚀</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
