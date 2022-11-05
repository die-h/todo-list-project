import React, { useContext, useRef, useState } from "react";
import style from "./TodoCreateForm.module.scss";
import { TodoContext } from "context/TodoContext";

const TodoCreateForm = () => {
  const form = useRef(null);
  const { openForm, setOpenForm, addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const newTodoText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoText(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todoText);
    setOpenForm(false);
  };
  return (
    <section className={`${style.section} `}>
      <div
        className={`${style.bg} bg-gradient-to-r from-sky-500 to-indigo-500`}
      ></div>
      <form
        ref={form}
        onSubmit={onSubmit}
        className={`${style.form} bg-gray-200 rounded-xl `}
      >
        <h2>Add a new TO DO to the list!</h2>
        <label htmlFor="todo">
          <textarea
            name="todo"
            placeholder="Add your new TO DO here"
            value={todoText}
            onChange={newTodoText}
          />
        </label>
        <div className={style.buttonContainer}>
          <button
            type="button"
            className={style.button}
            onClick={() => setOpenForm(false)}
          >
            Cancel
          </button>
          <button type="submit" className={style.button}>
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export { TodoCreateForm };
