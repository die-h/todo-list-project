import React, { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import {
  TodoCounter,
  TodoItem,
  TodoList,
  CreateTodoButton,
  TodoSearch,
} from "components/Home";
import { todo } from "types/todo.interface";

const Home = () => {
  // interface todo {
  //   text: string;
  //   completed: boolean;
  // }

  // const defaultTodos: todo[] = [
  //   { text: "Cortar cebolla", completed: true },
  //   { text: "Tormar el curso de intro a react", completed: false },
  //   { text: "Llorar con la llorona", completed: false },
  //   { text: "Llorar con cebolla", completed: false },
  // ];
  const lsTodoVar = "dhtodos_V1";

  const [todos, saveTodos] = useLocalStorage(lsTodoVar, []) as [
    todo[],
    (newItem: todo[]) => void
  ];
  const [searchValue, setSearchValue] = useState<string>("");
  const completedTodos: number = todos.filter(
    (todo) => !!todo.completed
  ).length;
  const totalTodos: number = todos.length;

  const completeTodo = (text: string) => {
    const newTodos: todo[] = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text: string) => {
    const newTodos: todo[] = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
    <main
      className={
        "flex justify-center items-center w-screen min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500"
      }
    >
      <section
        className="flex flex-col gap-2 h-fit bg-gray-200 rounded-xl p-5"
        style={{ height: "600px", width: "400px" }}
      >
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
      </section>
    </main>
  );
};

export default Home;
