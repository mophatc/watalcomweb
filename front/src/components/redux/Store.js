import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import  { serviceReducer } from "./serviceSlice";


const store = configureStore({
    
    reducer:{
        cart:cartReducer,
        service: serviceReducer

    }
})

export default store; 