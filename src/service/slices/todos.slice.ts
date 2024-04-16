import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types/task.interface.ts";
import { TVariant } from "../../types/variant.type.ts";
import { todosReducers } from "./todos.reducers.ts";

export interface IState {
  todos: ITask[];
  variant: TVariant;
}

const initialState: IState = {
  todos: [],
  variant: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTaskReducer: (state, action) => todosReducers.addTask(state, action),
    changeTaskReducer: (state, action) =>
      todosReducers.changeTask(state, action),
    deleteTaskReducer: (state, action) =>
      todosReducers.deleteTask(state, action),
    clearTasksReducers: (state) => todosReducers.clearTasks(state),
    allTasksReducers: (state) => todosReducers.allTasks(state),
    completedTasksReducers: (state) => todosReducers.completedTasks(state),
  },
  extraReducers: () => {},
  selectors: {
    todosState: (sliceState) => sliceState,
  },
});

export const { todosState } = todosSlice.selectors;

export const {
  addTaskReducer,
  changeTaskReducer,
  deleteTaskReducer,
  clearTasksReducers,
  allTasksReducers,
  completedTasksReducers,
} = todosSlice.actions;
