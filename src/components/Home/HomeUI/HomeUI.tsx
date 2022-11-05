import React, { useContext } from "react";
import {
  TodoCounter,
  TodoItem,
  TodoList,
  CreateTodoButton,
  TodoSearch,
  TodoCreateForm,
} from "components/Home";
import { TodoContext } from "context/TodoContext";
import { Modal } from "components/shared";

const HomeUI = () => {
  const { searchedTodos, completeTodo, deleteTodo, openForm } =
    useContext(TodoContext);
  return (
    <main
      className={
        "flex justify-center items-center w-screen min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500"
      }
    >
      <section
        className="flex flex-col gap-2 h-fit bg-gray-200 rounded-xl p-5 relative"
        style={{ height: "600px", width: "400px" }}
      >
        <TodoCounter />
        <TodoSearch />
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
        <Modal>{openForm ? <TodoCreateForm /> : null}</Modal>
        <CreateTodoButton />
      </section>
    </main>
  );
};

export { HomeUI };
