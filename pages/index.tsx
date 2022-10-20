import React, { useState } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";

const Home = () => {
  interface todo {
    text: string;
    completed: boolean;
  }
  const defaultTodos: todo[] = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tormar el curso de intro a react", completed: false },
    { text: "Llorar con la llorona", completed: true },
    { text: "Llorar con cebolla", completed: true },
  ];

  const [searchValue, setSearchValue] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>(defaultTodos);
  const [completedTodos, setCompletedTodos] = useState(
    todos.filter((todo) => !!todo.completed).length
  );
  const totalTodos: number = todos.length;

  let searchedTodos: todo[] = [];

  if (searchValue.length >= 1) {
    searchedTodos = defaultTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });
  } else {
    searchedTodos = defaultTodos;
  }

  const completeTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos: todo[] = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodos(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
};

export default Home;
