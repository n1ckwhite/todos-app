import s from "./App.module.css";
import { Todos } from "../Todos";
export const App = () => {
  return (
    <div className={s.app}>
      <Todos />
    </div>
  );
};
