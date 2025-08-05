import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const StudentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const student = {
                id: nanoid(),
                name: action.payload.name,
                fatherName: action.payload.fatherName,
                semester: action.payload.semester,
                department: action.payload.department,
            };

            state.push(student);
        },
        updateStudent: (state, action) => {
            const { id, name, fatherName, semester, department } =
                action.payload;
            const student = state.find((s) => s.id === id);
            if (student) {
                student.name = name;
                student.fatherName = fatherName;
                student.semester = semester;
                student.department = department;
            }
        },
        deleteStudent: (state, action) => {
            return state.filter((s) => s.id !== action.payload.id);
        },
    },
});

export const { addStudent, updateStudent, deleteStudent } =
    StudentSlice.actions;

export default StudentSlice.reducer;
