// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// export const fetchPizza = createAsyncThunk(
//     'pizza/fetchByIdStatus',
//     async (params) => {
//         const {pageCount} = params
//       const {data} = await axios.get(
//         `https://63ebd01332a081172392801a.mockapi.io/items?&page=${pageCount}&limit=4`
//       )
//       return data
//     }
//   )

// const initialState = {
//     items: [],
// };

// export const pizzaSlice = createSlice({
//   name: "pizza",
//   initialState,
//   reducers: {
//     setPizza: (state, action) => {
//       state.items = action.payload;
//     },
//     extraReducers: {
//         [fetchPizza.fulfilled]: (state, action) => {
//             console.log(state)
//         }
//     }
   
//   },
// });

// export const { setPizza } = pizzaSlice.actions;

// export default pizzaSlice.reducer;
