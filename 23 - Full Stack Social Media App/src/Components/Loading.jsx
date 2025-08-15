import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-black/20 z-0">
            <div className="flex flex-col items-center justify-center">
                <FaSpinner className="animate-spin text-4xl" />
                <h1>Loading...</h1>
            </div>
        </div>
    );
};

export default Loading;
