import { FaHeart, FaThumbsUp, FaSmile } from "react-icons/fa";

export default function Post({ name, time, text, image, likes }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4">
            <div className="flex items-center space-x-3 mb-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt={name}
                    className="rounded-full"
                />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <span className="text-gray-500 text-sm">{time}</span>
                </div>
            </div>
            <p className="mb-3">{text}</p>
            {image && (
                <img src={image} alt="Post" className="rounded-lg mb-3" />
            )}
            <div className="flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                    <FaHeart className="text-red-500 mx-3 text-2xl" /> {likes}
                </div>
                <button className="flex items-center space-x-2">
                    <FaSmile /> <span>Write your comment</span>
                </button>
            </div>
        </div>
    );
}
