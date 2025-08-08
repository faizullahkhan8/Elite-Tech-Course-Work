import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "../Feature/CartSlice";
import CategoryReducer from "../Feature/CategorySlice";

const Store = configureStore({
    reducer: {
        Cart: CartReducer,
        Category: CategoryReducer,
    },
});

export default Store;
