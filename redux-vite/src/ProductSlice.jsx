import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    count: 0,
    products: []
}


const ProductSlice = createSlice({

    name: 'product',
    initialState,
    reducers: {

        increment: (state, action) => {
            state.count += 1;
            state.products.push(action.payload);


            // console.log(productss); // This will print the actual array contents

        },



    }



});
export const { increment } = ProductSlice.actions;

export default ProductSlice.reducer;