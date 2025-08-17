// src/pages/UserProfile.jsx
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { useFirebase } from "../Contexts/FirebaseContext";
import { FaUserPlus, FaUserCheck, FaUserTimes } from "react-icons/fa";
import ProfilePlaceHolder from "../Components/ProfilePlaceholder";

export default function UserProfile() {
    const { id } = useParams(); // visiting user ID
    const {
        user,
        userInfo,
        getUserInfo,
        fetchUserPosts,
        addFriend,
        removeFriend,
    } = useFirebase();

    const [profile, setProfile] = useState(null);
    const [friendStatus, setFriendStatus] = useState("none");
    const [friends, setFriends] = useState([]);
    const [posts, setPosts] = useState([]);

    // fetch visited user's profile, friends, posts
    useEffect(() => {
        const loadProfile = async () => {
            const data = await getUserInfo(id);
            setProfile(data);

            // determine friend status
            if (userInfo?.friends?.includes(id)) {
                setFriendStatus("friends");
            } else if (userInfo?.requestsSent?.includes(id)) {
                setFriendStatus("pending");
            } else {
                setFriendStatus("none");
            }

            // fetch friends and posts
            setFriends(user.friends || []);

            const postList = await fetchUserPosts(id);
            setPosts(postList || []);
        };

        if (id) {
            loadProfile();
        }
    }, [id, userInfo, getUserInfo, fetchUserPosts, user.friends]);

    // handle add/unfriend
    const handleAddFriend = async () => {
        await addFriend(id);
        getUserInfo(user.uid);
        setFriendStatus("pending");
    };

    const handleUnfriend = async () => {
        await removeFriend(id);
        getUserInfo(user.uid);
        setFriendStatus("none");
    };

    if (id === userInfo.uid) {
        return Navigate("/profile");
    }

    if (!profile) {
        return <ProfilePlaceHolder />;
    }

    return (
        <div className="flex flex-col w-full mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* Cover */}
            {profile.coverUrl && (
                <img
                    src={profile.coverUrl}
                    alt="cover"
                    className="w-full h-48 object-cover"
                />
            )}

            {/* Profile Info */}
            <div className="p-6">
                <div className="flex items-center gap-4">
                    {profile.imageUrl && (
                        <img
                            src={profile.imageUrl}
                            alt="profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-white -mt-16"
                        />
                    )}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {profile.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {profile.occupation || "No occupation set"}
                        </p>
                    </div>
                </div>

                {/* Bio */}
                {profile.bio && (
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {profile.bio}
                    </p>
                )}

                {/* Actions */}
                {user.uid !== profile.id && (
                    <div className="mt-6">
                        {friendStatus === "none" && (
                            <button
                                onClick={handleAddFriend}
                                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                            >
                                <FaUserPlus /> Add Friend
                            </button>
                        )}

                        {friendStatus === "friends" && (
                            <button
                                onClick={handleUnfriend}
                                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                <FaUserCheck /> Unfriend
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Friends */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Friends
                </h3>
                {friends.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {friends.map((f) => (
                            <div
                                key={f.id}
                                className="flex flex-col items-center text-center"
                            >
                                <img
                                    src={f.imageUrl || "/default-avatar.png"}
                                    alt={f.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                                    {f.name}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">
                        No friends yet
                    </p>
                )}
            </div>

            {/* Posts */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Posts
                </h3>
                {posts.length > 0 ? (
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                            >
                                <p className="text-gray-800 dark:text-gray-200">
                                    {post.text}
                                </p>
                                {post.imageUrl && (
                                    <img
                                        src={post.imageUrl}
                                        alt="post"
                                        className="mt-2 rounded-lg"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">
                        No posts to display
                    </p>
                )}
            </div>
        </div>
    );
}
