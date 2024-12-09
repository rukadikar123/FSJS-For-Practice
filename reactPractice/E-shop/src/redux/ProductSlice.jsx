import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  setSearchTerm:'',
  filteredData:[]
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
        setProducts(state, action){
            state.products=action.payload
        },
        setSearchTerm(state,action){
          state.setSearchTerm=action.payload
          if(setSearchTerm ){
              state.filteredData=state.products.filter((product)=> product.title.toLowerCase().includes(state.setSearchTerm.toLocaleLowerCase()))
          }
          
      },
        
  },
});

export const {setProducts, setSearchTerm}=ProductSlice.actions

export default ProductSlice.reducer;
