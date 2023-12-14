import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    }
   
  },
});

export const { setCategoryId,  setPageCount } = filterSlice.actions

export default filterSlice.reducer