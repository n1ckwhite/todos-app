import { FC } from "react";
import s from "./Todos.module.css";
import { Title } from "../Title";
import { Buttons } from "./components/Buttons";
import { Text } from "../Text/Text.tsx";
import { todosState } from "../../service/slices/todos.slice.ts";
import { useSelector } from "react-redux";
import { TodosForm } from "./components/TodosForm";
import { TodosCheckbox } from "./components/TodosCheckbox";
import { TodosClearButton } from "./components/TodosClearButton";
export const Todos: FC = () => {
  const { todos } = useSelector(todosState);

  return (
    <div className={s.todos}>
      <Title text="Todos" />
      <TodosForm />
      <TodosCheckbox />
      <div className={s.bottom}>
        <Text txt={`${todos.length} items left`} />
        <Buttons />
        <TodosClearButton />
      </div>
    </div>
  );
};
