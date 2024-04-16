import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todosSlice } from "./slices/todos.slice.ts";

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
