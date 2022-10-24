import React from "react";
import styles from "./TodoItem.module.scss"

const TodoItem = ({
  completed,
  text,
  onComplete,
  deleteTodo
}: {
  text: string;
  completed: boolean;
  onComplete: VoidFunction;
  deleteTodo: VoidFunction;
}) => {

  return (
    <li style={{ display: "flex" }}>
      <span
        onClick={onComplete}
        className={`${styles.check} ${completed ? styles.completed : ""}`}
      >
        C
      </span>
      <p>{text}</p>
      <span onClick={deleteTodo}>X</span>
    </li>
  );
};

export { TodoItem };
