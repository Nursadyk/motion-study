"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useTranslateSlice from "./futures/useTranslateSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  translate: useTranslateSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
