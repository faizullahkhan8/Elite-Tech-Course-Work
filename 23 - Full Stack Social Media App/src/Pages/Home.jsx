import Sidebar from "../Components/Home/Sidebar";
import Feed from "../Components/Home/Feed";
import RightSidebar from "../Components/Home/RightSidebar";

export default function App() {
    return (
        <div className="">
            <div className="flex mt-4 mx-4">
                <Sidebar />
                <Feed />
                <RightSidebar />
            </div>
        </div>
    );
}
