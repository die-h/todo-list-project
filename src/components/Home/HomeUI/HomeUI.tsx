import React, { useContext } from "react";
import {
  TodoCounter,
  TodoItem,
  TodoList,
  CreateTodoButton,
  TodoSearch,
} from "components/Home";
import { TodoContext } from "context/TodoContext";

const HomeUI = () => {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useContext(TodoContext);
  const context = useContext(TodoContext);
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

export { HomeUI };
