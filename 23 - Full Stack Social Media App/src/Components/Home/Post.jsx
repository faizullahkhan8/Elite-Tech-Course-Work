import { FaHeart, FaSmile } from "react-icons/fa";
import { Link } from "react-router";

export default function Post({ id, name, time, text, avatar, image, likes }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-3">
                <img
                    src={avatar}
                    alt={name}
                    className="rounded-full w-[3rem] h-[3rem] object-cover"
                />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <span className="text-gray-500 text-sm">{time}</span>
                </div>
            </div>

            {/* Post Text */}
            {text && <p className="mb-3">{text}</p>}

            {/* Post Image */}
            {image && (
                <Link to={`/post/${id}`} className="block">
                    <img
                        src={image}
                        alt="Post"
                        className="rounded-lg mb-3 w-full object-cover"
                    />
                </Link>
            )}

            {/* Reactions & Comment */}
            <div className="flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                    <FaHeart className="text-red-500 mx-3 text-2xl" />{" "}
                    <span>{likes.length}</span>
                </div>
                <button className="flex items-center space-x-2">
                    <FaSmile /> <span>Write your comment</span>
                </button>
            </div>
        </div>
    );
}
