import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    addOne(state, action) {
      state.value += 1;
    },
    removeOne(state, action) {
        state.value -= 1;
      },
  },
});

export const { addOne,removeOne} = counterSlice.actions;

export default counterSlice.reducer;
