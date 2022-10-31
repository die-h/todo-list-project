import React from "react";

export interface todo {
  text: string;
  completed: boolean;
}

export interface todoContext {
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: todo[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
}
