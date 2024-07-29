import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import CardSlice from "./slices/CardSlice";
import menuSlice from "./slices/PizzaMenuSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    card: CardSlice,
    menu: menuSlice,
  },
});
