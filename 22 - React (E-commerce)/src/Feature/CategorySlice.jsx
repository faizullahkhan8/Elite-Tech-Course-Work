import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            return action.payload;
        },
        clearCategory: () => {
            return "";
        },
    },
});

export const { addCategory, clearCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
