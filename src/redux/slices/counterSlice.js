import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        return { ...state, value: state.value - 1 };
      } else {
        return state;
      }
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
