import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../redux/ProductSlice.jsx'

export const store=configureStore({
    reducer:{
        products:ProductSlice,

    }
})