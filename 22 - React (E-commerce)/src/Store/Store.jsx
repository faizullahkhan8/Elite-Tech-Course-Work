import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "../Feature/CartSlice";

const Store = configureStore({
    reducer: {
        Cart: CartReducer,
    },
});

export default Store;
