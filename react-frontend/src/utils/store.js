import { configureStore } from "@reduxjs/toolkit";
import triggerSlice from "./triggerSlice";

const store=configureStore({
    reducer:{
        cart:triggerSlice,

    },

})

export default store;
