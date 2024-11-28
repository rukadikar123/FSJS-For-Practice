import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const itemIndex = state.CartProducts.find(
        (item) => item.id === newProduct.id
      );
      if (itemIndex) {
        itemIndex.totalPrice += newProduct.totalPrice;
        itemIndex.quantity++;
      } else {
        state.CartProducts.push({
          ...newProduct,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      }
      state.totalPrice += newProduct.price;
      state.totalQuantity++;
    },
    increaseQuantity(state, action) {
      const product = action.payload;
      const itemIndex = state.CartProducts.find(
        (item) => item.id === product.id
      );
      if (itemIndex) {
        itemIndex.quantity += 1;
        itemIndex.totalPrice += itemIndex.price;
        state.totalQuantity++;
        state.totalPrice += itemIndex.price;
      }
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      const itemIndex = state.CartProducts.find(
        (item) => item.id === product.id
      );
      if (itemIndex) {
        if (itemIndex.quantity > 1) {
          itemIndex.quantity -= 1;
          itemIndex.totalPrice -= itemIndex.price;
          state.totalQuantity--;
          state.totalPrice -= itemIndex.price;
        }
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      const itemIndex = state.CartProducts.find(
        (item) => item.id === product.id
      );
      if (itemIndex) {
        state.totalPrice -= itemIndex.totalPrice;
        state.totalQuantity -= itemIndex.quantity;
        state.CartProducts = state.CartProducts.filter(
          (item) => item.id !== itemIndex.id
        );
      }
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;
