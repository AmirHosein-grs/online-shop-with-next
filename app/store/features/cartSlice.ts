"use client";

import { CartType } from "@/app/models/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: CartType[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action: PayloadAction<CartType[]>) => {
      state.cart = action.payload;
    },
    addCount: (state, action: PayloadAction<CartType>) => {
      const existingProduct: any = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        // If the product is already in the cart, update its count
        existingProduct.count += action.payload.count;
      } else {
        // If the product is not in the cart, add it
        state.cart.push(action.payload);
      }
    },
    reduceProductCount: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;

      // Find the product in the cart
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === productIdToRemove
      );

      if (existingProductIndex !== -1) {
        // Reduce the count
        state.cart[existingProductIndex].count -= 1;

        // Remove the product if count becomes zero
        if (state.cart[existingProductIndex].count === 0) {
          state.cart.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { setCarts, addCount, reduceProductCount } = cartSlice.actions;
export default cartSlice.reducer;
