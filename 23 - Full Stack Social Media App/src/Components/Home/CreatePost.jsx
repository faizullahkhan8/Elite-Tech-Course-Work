import { FaVideo, FaImage, FaSmile } from "react-icons/fa";

export default function CreatePost() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="rounded-full"
                />
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="bg-gray-100 rounded-full px-4 py-2 w-full outline-none"
                />
            </div>
            <div className="flex justify-around mt-4 text-sm text-gray-600">
                <button className="flex items-center space-x-2">
                    <FaVideo className="text-red-500" /> <span>Go Live</span>
                </button>
                <button className="flex items-center space-x-2">
                    <FaImage className="text-green-500" /> <span>Photo</span>
                </button>
                <button className="flex items-center space-x-2">
                    <FaSmile className="text-yellow-500" /> <span>Feeling</span>
                </button>
            </div>
        </div>
    );
}
