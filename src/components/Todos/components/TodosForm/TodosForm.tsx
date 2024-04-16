import { FC, SyntheticEvent, useState } from "react";
import { Input } from "../../../Input";
import { addTaskReducer } from "../../../../service/slices/todos.slice.ts";
import { useAppDispatch } from "../../../../service/store.ts";
import { v4 as uuidv4 } from "uuid";

export const TodosForm: FC = () => {
  const id = uuidv4();
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const addTask = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addTaskReducer({ text, id, checked: false }));
    setText("");
  };
  return (
    <form action="#" onSubmit={addTask}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
