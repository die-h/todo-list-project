import React from "react";
// import styles from "./TodoItem.module.scss";
import Image from "next/image";
import check from "@icons/checkbox-checked.svg";
import uncheck from "@icons/checkbox-unchecked.svg";
import dismiss from "@icons/dismiss.svg";

const TodoItem = ({
  completed,
  text,
  onComplete,
  deleteTodo,
}: {
  text: string;
  completed: boolean;
  onComplete: VoidFunction;
  deleteTodo: VoidFunction;
}) => {

  return (
    <li
      className="flex justify-between items-center h-8"
    >
      <div className={`flex items-center h-8 gap-2 ${completed ? "line-through" : ""}`}>
        <Image
          src={completed ? check : uncheck}
          onClick={onComplete}
          alt={"Toggle complete TO DO"}
        />
        <p>{text}</p>
      </div>
      <Image src={dismiss} width={"20"} height="20" onClick={deleteTodo} alt={"Dismiss To Do"}/>
    </li>
  );
};

export { TodoItem };
