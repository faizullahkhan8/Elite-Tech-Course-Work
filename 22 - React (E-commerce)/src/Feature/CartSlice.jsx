import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "",
        quantity: 0,
    },
];

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.id = action.payload.id;
            state.quantity = action.payload.quantity;
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const updatingIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );
            if (updatingIndex !== -1) {
                state[updatingIndex].quantity = action.payload.quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
