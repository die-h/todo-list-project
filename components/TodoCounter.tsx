import React from "react";

const TodoCounter = ({
  completedTodos,
  totalTodos,
}: {
  completedTodos: number;
  totalTodos: number;
}) => {
  return (
    <h2>
      Has completado {completedTodos} de {totalTodos} Todo's
    </h2>
  );
};

export { TodoCounter };
