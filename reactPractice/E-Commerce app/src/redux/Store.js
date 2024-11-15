import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./ProductSlice"
import CartSlice from "./CartSlice.jsx"

 const store=configureStore({
        reducer:{
            products:Productslice,
            cart:CartSlice
        }
})

export default store