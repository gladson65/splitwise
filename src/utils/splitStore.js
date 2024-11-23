import { configureStore } from '@reduxjs/toolkit';
import groupReducer from "./groupSlice.js";

const splitStore = configureStore({
    reducer: {
        group: groupReducer,
    }
})

export default splitStore;