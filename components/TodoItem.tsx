import React, { useState } from "react";

const TodoItem = (props: { text: string }) => {
  const [complete, setComplete] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState(false);

  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span onClick={() => setDeleteTodo(true)}>X</span>
    </li>
  );
};

export { TodoItem };
