import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utils/apis/pizzas-api";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

export const itemsData = createAsyncThunk(
  "menu/itemsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}`);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const { data } = await response.json();
      return data;
    } catch (e) {
      console.error(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(itemsData.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(itemsData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    });
    builder.addCase(itemsData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default menuSlice.reducer;
