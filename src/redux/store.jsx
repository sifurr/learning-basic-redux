import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({

    // it will contain the reducer of slice
    reducer : {
        counter: counterReducer
    },
});

export default store;