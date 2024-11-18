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
           productIndex.totalPrice+=newProduct.price
            
           }else{
            state.products.push({...newProduct,quantity:1 ,totalPrice:newProduct.price})
            
            alert("Product added to cart succesfully")
           }
           state.totalPrice +=newProduct.price
           state.totalQuantity++
        },
        
        increaseQuantity(state,action){
            const product=action.payload
            const itemIndex=state.products.find((item)=>item.id===product.id)
            if(itemIndex){
                itemIndex.quantity+=1
                itemIndex.totalPrice+=itemIndex.price
                state.totalQuantity++
                state.totalPrice+=itemIndex.price
            }
        },
        decreaseQuantity(state,action){
            const product=action.payload
            const itemIndex=state.products.find((item)=>item.id===product.id)
            if(itemIndex){
                if(itemIndex.quantity>1){
                    itemIndex.quantity-=1
                    itemIndex.totalPrice-=itemIndex.price
                state.totalQuantity--
                state.totalPrice-=itemIndex.price
                }
            }
        },
        removeFromCart(state,action){
            const product=action.payload
            const itemIndex=state.products.find((item)=>item.id === product.id)
            if(itemIndex){
                state.totalPrice-=itemIndex.totalPrice
                state.totalQuantity-=itemIndex.quantity
                state.products=state.products.filter((item)=> item.id !==itemIndex.id)
            }
        }
    }
})

export const {addToCart , increaseQuantity , decreaseQuantity , removeFromCart}=CartSlice.actions

export default  CartSlice.reducer