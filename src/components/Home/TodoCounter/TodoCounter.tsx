import React from "react";

import styles from "./TodoCounter.module.scss";

const TodoCounter = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) => {
  return (
    <h2 className={styles.todoCounter}>
      Has completado {completed} de {total} Todo's
    </h2>
  );
};

export { TodoCounter };
