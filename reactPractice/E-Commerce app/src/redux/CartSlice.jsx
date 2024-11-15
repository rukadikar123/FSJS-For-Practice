import {createSlice} from "@reduxjs/toolkit"

const initialState={
    products:[],
    totalQuantity:0,
    totalPrice:0
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
           const newProduct=action.payload
           const productIndex=state.products.find((item)=> newProduct.id===item.id)
           if(productIndex){
            productIndex.quantity++
            state.totalQuantity++
            state.totalPrice+=newProduct.Price
           }else{
            state.products.push({...newProduct,quantity:1, totalPrice: newProduct.price})
            state.totalQuantity++
            state.totalPrice+=newProduct.Price
           }
        }
    }
})

export const {addToCart}=CartSlice.actions

export default  CartSlice.reducer