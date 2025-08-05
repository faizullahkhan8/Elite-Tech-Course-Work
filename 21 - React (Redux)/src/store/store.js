import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Features/StudentSlice";

const store = configureStore({
    reducer: {
        students: StudentSlice,
    },
    devTools: true,
});

export default store;
