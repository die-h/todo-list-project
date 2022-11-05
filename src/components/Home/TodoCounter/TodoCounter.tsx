import React, { useContext } from "react";
import { TodoContext } from "context/TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="h-8 font-medium text-center text-xl leading-8 text-gray-900">
      You have completed {completedTodos} of {totalTodos} Todo's!
    </h2>
  );
};

export { TodoCounter };
