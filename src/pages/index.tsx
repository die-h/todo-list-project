import React, { useState } from "react";

import {
  TodoCounter,
  TodoItem,
  TodoList,
  CreateTodoButton,
  TodoSearch,
} from "src/components/Home";

const Home = () => {
  interface todo {
    text: string;
    completed: boolean;
  }
  const defaultTodos: todo[] = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tormar el curso de intro a react", completed: false },
    { text: "Llorar con la llorona", completed: false },
    { text: "Llorar con cebolla", completed: false },
  ];

  const [searchValue, setSearchValue] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos: number = todos.length;

  const completeTodo = (text: string) => {
    const newTodos: todo[] = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos: todo[] = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  let searchedTodos: todo[] = [];

  if (searchValue.length >= 1) {
    console.log(searchValue);

    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });

  } else {
    searchedTodos = todos;
  }
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
};

export default Home;
