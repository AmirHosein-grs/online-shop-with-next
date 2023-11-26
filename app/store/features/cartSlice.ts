"use client";

import { cartType } from "@/app/models/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart?: cartType;
}

const initialState: CartState = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartType>) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
