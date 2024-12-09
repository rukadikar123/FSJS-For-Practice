import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../redux/ProductSlice.jsx'
import CartSlice from '../redux/CartSlice.jsx'

export const store=configureStore({
    reducer:{
        products:ProductSlice,
        cart:CartSlice
    }
})