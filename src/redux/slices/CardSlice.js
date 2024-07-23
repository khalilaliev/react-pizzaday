import { createSlice } from "@reduxjs/toolkit";
import { totalItems, totalPrice } from "../../utils/calculateItems";

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        isExist.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalItems = totalItems(state.items);
      state.totalPrice = totalPrice(state.items);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalItems = totalItems(state.items);
      state.totalPrice = totalPrice(state.items);
    },
    incrementPizza: (state, action) => {
      const pizza = state.items.find((item) => item.id === action.payload);
      if (pizza) {
        pizza.count += 1;
      }
      state.totalItems = totalItems(state.items);
      state.totalPrice = totalPrice(state.items);
    },
    decrementPizza: (state, action) => {
      const pizza = state.items.find((item) => item.id === action.payload);
      if (pizza && pizza.count > 1) {
        pizza.count -= 1;
      } else if (pizza && pizza.count === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      state.totalItems = totalItems(state.items);
      state.totalPrice = totalPrice(state.items);
    },
    reset: () => initialState,
  },
});

export const { addToCard, deleteItem, incrementPizza, decrementPizza, reset } =
  cardSlice.actions;

export default cardSlice.reducer;
