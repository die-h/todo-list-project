import React, { useContext } from "react";
import Image from "next/image";
import style from "./CreateTodoButton.module.scss";
import add from "assets/icons/add.svg";
import { TodoContext } from "context/TodoContext";

const CreateTodoButton = () => {
  const { setOpenForm, totalTodos } = useContext(TodoContext);
  return (
    <div className={style.container}>
    {totalTodos === 0 ? <div>{`Add your first Todo`}</div> : null}
    <button className={style.button} onClick={() => setOpenForm(true)}>
      <Image
        src={add}
        className={style.button}
        alt="open / close form to add a Todo to the list"
      ></Image>
    </button>
    </div>
  );
};

export { CreateTodoButton };
