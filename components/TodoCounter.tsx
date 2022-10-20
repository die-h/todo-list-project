import React from "react";

import styles from "../components/main.module.scss";

const TodoCounter = ({
  completedTodos,
  totalTodos,
}: {
  completedTodos: number;
  totalTodos: number;
}) => {
  return (
    <h2 className={styles.todoCounter}>
      Has completado {completedTodos} de {totalTodos} Todo's
    </h2>
  );
};

export { TodoCounter };
