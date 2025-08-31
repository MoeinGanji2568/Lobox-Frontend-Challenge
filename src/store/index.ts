import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "./slice/dropDownSlice";

export const store = configureStore({
  reducer: {
    dropDown: dropDownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
