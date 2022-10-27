import React from "react";

const TodoCounter = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) => {
  return (
    <h2 className="h-8 font-medium text-center text-xl leading-8 text-gray-900">
     You have completed {completed} of {total} Todo's! 
    </h2>
  );
};

export { TodoCounter };
