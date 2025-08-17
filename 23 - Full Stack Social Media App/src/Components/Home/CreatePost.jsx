import { FaVideo, FaImage, FaSmile } from "react-icons/fa";
import { Link } from "react-router";
import { useFirebase } from "../../Contexts/FirebaseContext";

export default function CreatePost() {
    const { userInfo } = useFirebase();
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Link
                to={"/post/create"}
                className="flex items-center justify-between space-x-3"
            >
                <img
                    src={userInfo.imageUrl}
                    alt="User"
                    className="rounded-full w-8 h-8 object-cover"
                />
                <p>What's on your mind {userInfo.name}</p>

                <button className="flex items-center space-x-2">
                    <FaImage className="text-green-500" />{" "}
                    <span>Upload Post</span>
                </button>
            </Link>
        </div>
    );
}
