import { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types/task.interface.ts";
import { IState } from "./todos.slice.ts";

export const todosReducers = {
  addTask: (state: IState, { payload }: PayloadAction<ITask>) => {
    state.todos.unshift(payload);
  },
  changeTask: (state: IState, { payload }: PayloadAction<ITask>) => {
    const findTodo = state.todos.find((todo) => todo.id === payload.id);
    if (findTodo) findTodo.checked = !findTodo.checked;
  },
  deleteTask: (state: IState, { payload }: PayloadAction<ITask>) => {
    const findTodoIndex = state.todos.findIndex(
      (todo) => todo.id === payload.id
    );
    state.todos.splice(findTodoIndex, 1);
  },
  clearTasks: (state: IState) => {
    state.todos = [];
    state.variant = "all";
  },
  allTasks: (state: IState) => {
    state.variant = "all";
  },
  completedTasks: (state: IState) => {
    state.variant = "completed";
  },
};
