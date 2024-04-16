import { FC } from "react";
import { Button } from "../../../Button";
import { useAppDispatch } from "../../../../service/store.ts";
import { clearTasksReducers } from "../../../../service/slices/todos.slice.ts";

export const TodosClearButton: FC = () => {
  const dispatch = useAppDispatch();
  const clear = () => {
    dispatch(clearTasksReducers());
  };
  return <Button onClick={clear} txt="Clear" />;
};
