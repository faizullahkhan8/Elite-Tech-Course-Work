import React, {
    MouseEventHandler,
    ReactElement,
    useEffect,
    useState,
} from "react";
import { useSelector } from "react-redux";

const Form = ({
    isVisible,
    setIsVisible,
    isUpdating = true,
    updatingStudentId = null,
    handleAddClick,
    handleUpdate,
}) => {
    // if updatingStudentId is provided, we assume it's an update operation

    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [semester, setSemester] = useState("");
    const [department, setDepartment] = useState("");
    const [id, setId] = useState("");

    const students = useSelector((state: any) => state.students);

    useEffect(() => {
        if (isUpdating && updatingStudentId !== null) {
            const student = students.find((s) => s.id === updatingStudentId);
            if (student) {
                setId(student.id);
                setName(student.name);
                setFatherName(student.fatherName);
                setSemester(student.semester);
                setDepartment(student.department);
            }
        }
    }, [isUpdating, updatingStudentId, students]);

    return (
        isVisible && (
            <div
                onClick={(e) => {
                    if (e.target?.id === "background") {
                        setIsVisible(false);
                    }
                }}
                className="absolute w-screen h-screen z-10 bg-gray-600/70 flex items-center justify-center"
                id="background"
            >
                <div className="bg-white w-[80%] h-max rounded-2xl p-8 flex flex-col gap-8">
                    <h1 className="text-center text-3xl font-bold">
                        {isUpdating ? "Update Student" : "Register Student"}
                    </h1>
                    <form
                        className="flex h-full w-full flex-col z-20 gap-[1rem] items-center"
                        onSubmit={
                            isUpdating
                                ? (e) => {
                                      e.preventDefault();
                                      handleUpdate(
                                          id,
                                          name,
                                          fatherName,
                                          semester,
                                          department
                                      );
                                      setName("");
                                      setFatherName("");
                                      setSemester("");
                                      setDepartment("");
                                  }
                                : (e) => {
                                      e.preventDefault();
                                      handleAddClick(
                                          name,
                                          fatherName,
                                          semester,
                                          department
                                      );
                                      setName("");
                                      setFatherName("");
                                      setSemester("");
                                      setDepartment("");
                                  }
                        }
                    >
                        <div className="w-[70%] flex items-center justify-between">
                            <label htmlFor="name" className="text-xl font-bold">
                                Student Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border rounded-2xl py-2 px-4 text-2xl"
                                placeholder="Enter student name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="w-[70%] flex items-center justify-between">
                            <label
                                htmlFor="fatherName"
                                className="text-xl font-bold"
                            >
                                Father’s Name
                            </label>
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                required
                                className="border rounded-2xl py-2 px-4 text-2xl"
                                placeholder="Enter father’s name..."
                                value={fatherName}
                                onChange={(e) => setFatherName(e.target.value)}
                            />
                        </div>

                        <div className="w-[70%] flex items-center justify-between">
                            <label
                                htmlFor="semester"
                                className="text-xl font-bold"
                            >
                                Semester
                            </label>
                            <input
                                type="text"
                                id="semester"
                                name="semester"
                                required
                                className="border rounded-2xl py-2 px-4 text-2xl"
                                placeholder="Enter semester (e.g., 5th)"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                            />
                        </div>

                        <div className="w-[70%] flex items-center justify-between">
                            <label
                                htmlFor="department"
                                className="text-xl font-bold"
                            >
                                Department
                            </label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                required
                                className="border rounded-2xl py-2 px-4 text-2xl"
                                placeholder="Enter department (e.g., Computer Science)"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </div>

                        <button
                            className="px-4 py-2 rounded-2xl w-[12rem] text-xl bg-green-700 text-white font-bold"
                            type="submit"
                        >
                            {isUpdating ? "Update" : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default Form;
