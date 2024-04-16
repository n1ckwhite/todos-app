import { FC, HTMLAttributes } from "react";
import s from "./Button.module.css";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
  txt: string;
}

export const Button: FC<IButton> = ({ txt, ...props }) => {
  return (
    <button className={s.btn} {...props}>
      {txt}
    </button>
  );
};
