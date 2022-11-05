import React, { useContext } from "react";
import Image from "next/image";
import style from "./CreateTodoButton.module.scss";
import add from "assets/icons/add.svg";
import { TodoContext } from "context/TodoContext";

const CreateTodoButton = () => {
  const { setOpenForm } = useContext(TodoContext);
  return (
    <button className={style.container} onClick={() => setOpenForm(true)}>
      <Image
        src={add}
        className={style.button}
        alt="open / close form to add a TO DO to the list"
      ></Image>
    </button>
  );
};

export { CreateTodoButton };
