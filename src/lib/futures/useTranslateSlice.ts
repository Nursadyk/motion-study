"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lg: "EN",
} as { lg: "EN" | "RU" };
const useTranslateSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<"EN" | "RU">) => {
      state.lg = action.payload;
    },
  },
});
export const { switchLanguage } = useTranslateSlice.actions;
export default useTranslateSlice.reducer;
