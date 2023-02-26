import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./todoslice";

const store = configureStore({
    reducer: {
        todoreducer : todoslice,
    }
})

export default store