import React, { createContext, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { todo, todoContext } from "types/todo.interface";

const TodoContext = createContext<todoContext>({} as todoContext);

function TodoProvider(props: React.PropsWithChildren) {
  const lsTodoVar = "dh_todos_V1";

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
    <TodoContext.Provider
      value={
        {
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }
      }
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
