import { FaShare, FaThumbsUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const SinglePost = ({ post }) => {
    if (!post) {
        // Example placeholder if no post is passed
        post = {
            user: "John Doe",
            date: "August 11, 2025",
            text: "This is an example post content. It matches the style of the home page.",
            image: "https://via.placeholder.com/600x300",
        };
    }

    return (
        <div className="flex flex-1 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                {/* User Info */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="user avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            {post.user}
                        </h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                </div>

                {/* Post Text */}
                <p className="mb-4 text-gray-700">{post.text}</p>

                {/* Post Image */}
                {post.image && (
                    <img
                        src={post.image}
                        alt="Post"
                        className="rounded-xl mb-4 w-full object-cover"
                    />
                )}

                {/* Actions */}
                <div className="flex justify-between text-gray-500 text-sm">
                    <button className="hover:text-green-500 flex items-center justify-between gap-4">
                        <FaThumbsUp /> Like
                    </button>
                    <button className="hover:text-green-500 flex items-center justify-between gap-4">
                        <FaMessage /> Comment
                    </button>
                    <button className="hover:text-green-500 flex items-center justify-between gap-4">
                        <FaShare /> Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
