import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload });
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: () => {
            return [];
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
    CartSlice.actions;
export default CartSlice.reducer;
