import React, { useState } from "react";

const TodoItem = (props: { text: string, completed: boolean, onComplete: VoidFunction}) => {
const deleteTodo = () => {

}
  return (
    <li>
      <span onClick={() => props.onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={() => deleteTodo()}>X</span>
    </li>
  );
};

export { TodoItem };
