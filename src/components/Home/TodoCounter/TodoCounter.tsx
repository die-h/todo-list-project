import React, {useContext} from "react";
import { TodoContext } from "context/TodoContext";


const TodoCounter = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) => {
  const context= useContext(TodoContext)
  return (
    <h2 className="h-8 font-medium text-center text-xl leading-8 text-gray-900">
     You have completed {completed} of {total} Todo's! 
    </h2>
  );
};

export { TodoCounter };
