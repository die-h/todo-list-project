import React from "react";
import { AppUI } from "components/Home";

import { TodoProvider } from "context/TodoContext";

const Home = () => {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
};

export default Home;
