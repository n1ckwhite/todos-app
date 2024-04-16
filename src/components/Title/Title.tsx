import { FC, HTMLAttributes } from "react";
import s from "./Title.module.css";

interface ITitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export const Title: FC<ITitle> = ({ text }) => {
  return <p className={s.title}>{text}</p>;
};
