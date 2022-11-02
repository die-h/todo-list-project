import React from "react";
import { HomeUI } from "components/Home";

import { TodoProvider } from "context/TodoContext";

const Home = () => {
  return (
    <TodoProvider>
      <HomeUI></HomeUI>
    </TodoProvider>
  );
};

export default Home;
