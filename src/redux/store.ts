import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import useTranslateSlice from "./futures/useTranslateSlice";

export const store = configureStore({
  reducer: {
    translate: useTranslateSlice,
  },
});
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
