import { FC } from "react";
import { Checkbox } from "../../../Checkbox";
import { useSelector } from "react-redux";
import { todosState } from "../../../../service/slices/todos.slice.ts";

export const TodosCheckbox: FC = () => {
  const { todos, variant } = useSelector(todosState);
  return (
    <ul>
      {todos.map((todo) => {
        if (variant === "all") {
          return (
            <li key={todo.id}>
              <Checkbox checked={todo.checked} id={todo.id} text={todo.text} />
            </li>
          );
        }
        if (variant === "completed" && todo.checked) {
          return (
            <li key={todo.id}>
              <Checkbox checked={todo.checked} id={todo.id} text={todo.text} />
            </li>
          );
        }
      })}
    </ul>
  );
};
