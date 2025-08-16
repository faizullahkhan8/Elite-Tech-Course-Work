import { useEffect, useState } from "react";
import { useFirebase } from "../../Contexts/FirebaseContext";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
    const { fetchPosts } = useFirebase();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                console.log(fetchedPosts);
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) {
        return (
            <div className="p-6 text-center text-gray-500">
                Loading posts...
            </div>
        );
    }

    return (
        <div className="flex-1 px-6">
            <CreatePost />
            {posts.length === 0 ? (
                <div className="mt-6 text-gray-500 text-center">
                    No posts yet.
                </div>
            ) : (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.creator?.name || "Unknown"}
                        time={post.createdAt?.toDate().toLocaleString() || ""}
                        text={post.text}
                        image={post.imageUrl}
                        likes={post.likes || 0}
                        comments={post.comments || 0}
                        avatar={post.creator.imageUrl}
                    />
                ))
            )}
        </div>
    );
}
