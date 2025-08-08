import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "../Feature/CartSlice";
import CategoryReducer from "../Feature/CategorySlice";
import UserReducer from "../Feature/UserSlice";

const Store = configureStore({
    reducer: {
        Cart: CartReducer,
        Category: CategoryReducer,
        User: UserReducer,
    },
});

export default Store;
