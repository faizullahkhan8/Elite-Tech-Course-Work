import { FaVideo, FaImage, FaSmile } from "react-icons/fa";
import { Link } from "react-router";

export default function CreatePost() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Link
                to={"/post/create"}
                className="flex items-center justify-between space-x-3"
            >
                <img
                    src={"user.imageUrl"}
                    alt="User"
                    className="rounded-full"
                />

                <button className="flex items-center space-x-2">
                    <FaImage className="text-green-500" />{" "}
                    <span>Upload Post</span>
                </button>
            </Link>
        </div>
    );
}
