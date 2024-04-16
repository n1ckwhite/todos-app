import { FC } from "react";
import s from "./Checkbox.module.css";
import cn from "classnames";
import { useAppDispatch } from "../../service/store.ts";
import {
  changeTaskReducer,
  deleteTaskReducer,
} from "../../service/slices/todos.slice.ts";
import { Button } from "../Button";
interface ICheckbox {
  text: string;
  id: string;
  checked: boolean;
}
export const Checkbox: FC<ICheckbox> = ({ text, id, checked }) => {
  const todo = { text, id, checked };
  const dispatch = useAppDispatch();
  const change = () => {
    dispatch(changeTaskReducer(todo));
  };
  const deleteTodo = () => {
    dispatch(deleteTaskReducer(todo));
  };
  return (
    <div className={s.input_checkbox}>
      <input
        onChange={change}
        checked={checked}
        type="checkbox"
        className={s.check}
        id={id}
      />
      <label
        onClick={change}
        className={cn(s.label, checked && s.label_active)}
      >
        {text}
      </label>
      <Button onClick={deleteTodo} txt="&times;" />
    </div>
  );
};
