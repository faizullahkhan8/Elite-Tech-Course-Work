import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    email: "",
    wishlist: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            const { name, email, id } = action.payload;
            state.name = name;
            state.email = email;
            state.id = id;
        },
        clearUser(state) {
            state.name = "";
            state.email = "";
            state.id = null;
            state.wishlist = [];
        },
        addToWishlist(state, action) {
            if (!state.wishlist.includes(action.payload)) {
                state.wishlist.push(action.payload);
            }
        },
        removeFromWishlist(state, action) {
            state.wishlist = state.wishlist.filter(
                (item) => item !== action.payload
            );
        },
    },
});

export const { setUser, clearUser, addToWishlist, removeFromWishlist } =
    userSlice.actions;
export default userSlice.reducer;
