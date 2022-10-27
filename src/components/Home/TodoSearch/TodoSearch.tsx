import React from "react";

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
      placeholder="Search something..."
      value={searchValue}
      onChange={handleSearchValue}
      className="p-2 border  border-sky-500 rounded-md focus:border-sky-700 focus:outline-sky-700  mb-4 mt-3"
    />
  );
};

export { TodoSearch };
