import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export const { login } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectuser = (state) => state.basket.user;

export default basketSlice.reducer;
