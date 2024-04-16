import { FC } from "react";
import s from "./Buttons.module.css";
import { Button } from "../../../Button";
import { useAppDispatch } from "../../../../service/store.ts";
import {
  allTasksReducers,
  completedTasksReducers,
} from "../../../../service/slices/todos.slice.ts";

export const Buttons: FC = () => {
  const dispatch = useAppDispatch();
  const all = () => {
    dispatch(allTasksReducers());
  };
  const completed = () => {
    dispatch(completedTasksReducers());
  };
  return (
    <div className={s.buttons}>
      <Button onClick={all} txt="All" />
      <Button onClick={completed} txt="Comleted" />
    </div>
  );
};
