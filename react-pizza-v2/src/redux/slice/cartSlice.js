import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct(state, action) {
      const finderItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (finderItem) {
        finderItem.count++;
      } else {
        state.items.push({
            ...action.payload,
            count: 1
        });
    }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + obj.count + sum;
      }, 0)
    },
    minusItem(state, action) {
      const finderItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (finderItem) {
        finderItem.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id === action.payload);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export const { addProduct, removeItem, clearItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
