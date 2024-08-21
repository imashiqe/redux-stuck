import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: true,
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
