import React from "react";

const TodoList = (props: any) => {
  return (
    <section>
      <ul className="flex flex-col gap-2">{props.children}</ul>
    </section>
  );
};

export { TodoList };
