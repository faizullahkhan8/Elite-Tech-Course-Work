import { useEffect, useState } from "react";
import { FaShare, FaThumbsUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useParams } from "react-router";
import { useFirebase } from "../Contexts/FirebaseContext";
import SinglePostSkeleton from "../Components/SinglePostSkeleton";

const SinglePost = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState("");
    const { fetchPostById, addComment, userInfo, getPostComments } =
        useFirebase();
    const postId = params.id;

    console.log(userInfo);

    // Fetch post
    useEffect(() => {
        const fetchPostData = async () => {
            const postData = await fetchPostById(postId);
            const postComments = await getPostComments(postId);
            setPost(postData);
            setComments(postComments);
            setLoading(false);
        };
        fetchPostData();
    }, [fetchPostById, postId, getPostComments]);

    // Add new comment
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const commentData = await addComment(postId, newComment);

        setComments((prev) => [commentData, ...prev]); // Optimistic update
        setNewComment("");
    };

    if (loading) {
        return <SinglePostSkeleton />;
    }

    return (
        <div className="flex flex-1 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                {/* User Info */}
                <div className="flex items-center mb-4">
                    <img
                        src={post.creator?.imageUrl || "default-avatar.png"}
                        alt="user avatar"
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            {post.creator?.name || "Unknown User"}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {post.createdAt?.toDate().toLocaleString() || ""}
                        </p>
                    </div>
                </div>

                {/* Post Text */}
                <p className="mb-4 text-gray-700">{post.text}</p>

                {/* Post Image */}
                {post.imageUrl && (
                    <img
                        src={post.imageUrl}
                        alt="Post"
                        className="rounded-xl mb-4 w-full object-cover"
                    />
                )}

                {/* Actions */}
                <div className="flex justify-between text-gray-500 text-sm mb-6">
                    <button className="hover:text-green-500 flex items-center gap-2">
                        <FaThumbsUp /> Like
                    </button>
                    <button className="hover:text-green-500 flex items-center gap-2">
                        <FaMessage /> Comment
                    </button>
                    <button className="hover:text-green-500 flex items-center gap-2">
                        <FaShare /> Share
                    </button>
                </div>

                {/* Comment Input */}
                <form
                    onSubmit={handleAddComment}
                    className="flex items-center mb-6"
                >
                    <img
                        src={userInfo?.imageUrl || "default-avatar.png"}
                        alt="user"
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-1 p-2 border rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                    >
                        Post
                    </button>
                </form>

                {/* Comments List */}
                <div className="space-y-4">
                    {comments.length > 0 ? (
                        comments.map((comment, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <img
                                    src={
                                        comment.user?.imageUrl ||
                                        "default-avatar.png"
                                    }
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <div className="bg-gray-100 p-3 rounded-xl w-full">
                                    <h4 className="font-semibold text-sm text-gray-800">
                                        {comment.user?.name}
                                    </h4>
                                    <p className="text-gray-700 text-sm">
                                        {comment.text}
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        {comment.createdAt
                                            ?.toDate()
                                            .toLocaleString() || ""}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">
                            No comments yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
