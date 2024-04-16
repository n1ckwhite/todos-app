import { FC, HTMLAttributes } from "react";
import s from "./Text.module.css";
interface IText extends HTMLAttributes<HTMLParagraphElement> {
  txt: string;
}

export const Text: FC<IText> = ({ txt, ...props }) => {
  return (
    <p className={s.txt} {...props}>
      {txt}
    </p>
  );
};
