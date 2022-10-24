import React from "react";

const TodoList = (props: any) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export { TodoList };
