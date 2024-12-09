import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lg: "EN",
} as { lg: "EN" | "RU" };
const TranslateSlice = createSlice({
  name: "useTranslate",
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<"EN" | "RU">) => {
      state.lg = action.payload;
    },
  },
});
export const { switchLanguage } = TranslateSlice.actions;
export default TranslateSlice.reducer;
