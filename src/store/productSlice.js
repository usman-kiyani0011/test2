import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(name, quantity, price) {
        return {
          payload: {
            id: nanoid(),
            name,
            quantity,
            price,
          },
        };
      },
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
