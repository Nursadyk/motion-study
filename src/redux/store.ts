import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import useTranslateSlice from "./futures/TranslateSlice";
const combineValues = combineReducers({
  translate: useTranslateSlice,
});
export const store = configureStore({
  reducer: combineValues,
});
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
