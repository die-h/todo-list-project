import React, { useState } from "react";

const TodoSearch = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="cebolla"
      value={searchValue}
      onChange={handleSearchValue}
    />
  );
};

export { TodoSearch };
