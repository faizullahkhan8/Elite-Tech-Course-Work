import { useEffect, useState } from "react";
import { useFirebase } from "../../Contexts/FirebaseContext";
import CreatePost from "./CreatePost";
import Post from "./Post";
import FeedPlaceholder from "./FeedPlaceholder";

export default function Feed() {
    const { fetchPosts } = useFirebase();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { user } = useFirebase();
    console.log(posts);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, [fetchPosts]);

    console.log(posts);

    return (
        <div className="flex-1 px-6">
            <CreatePost />
            {posts.length === 0 && loading ? (
                <FeedPlaceholder />
            ) : (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
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
