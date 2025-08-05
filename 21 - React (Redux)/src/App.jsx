import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
    addStudent,
    deleteStudent,
    updateStudent,
} from "./Features/StudentSlice";
import { toast } from "react-toastify";

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateStudentId, setUpdateStudentId] = useState(null);

    const data = useSelector((state) => state.students) || [];

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteStudent({ id }));
        toast.success("Student deleted successfully");
    };

    const handleUpdate = (id, name, fatherName, semester, department) => {
        dispatch(updateStudent({ id, name, fatherName, semester, department }));
        setIsVisible(false);
        setIsUpdating(false);
        toast.success("Student updated successfully");
    };

    const handleAddClick = (name, fatherName, semester, department) => {
        dispatch(addStudent({ name, fatherName, semester, department }));

        setIsVisible(false);
        setIsUpdating(false);
        toast.success("Student added successfully");
    };

    return (
        <div className="relative w-full min-h-dvh flex flex-col">
            <Form
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                isUpdating={isUpdating}
                setIsUpdating={setIsUpdating}
                updatingStudentId={updateStudentId}
                handleAddClick={handleAddClick}
                handleUpdate={handleUpdate}
                updateStudentId={updateStudentId}
            />
            <Navbar />
            <Body
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                setIsUpdating={setIsUpdating}
                setIsVisible={setIsVisible}
                setUpdateStudentId={setUpdateStudentId}
                data={data}
            />
            <Footer />
        </div>
    );
}

export default App;
