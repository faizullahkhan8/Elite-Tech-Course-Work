import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <FaSpinner className="animate-spin text-4xl text-dark" />
            <span className="ml-4 text-xl font-semibold text-dark">
                Loading...
            </span>
        </div>
    );
};

export default Loading;
