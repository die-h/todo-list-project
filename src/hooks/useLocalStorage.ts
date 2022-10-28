import {useEffect, useState} from "react";

function useLocalStorage(
  localItem: string,
  initialValue: unknown
): [unknown, (newItem: unknown) => void] {
  let parsedItem: unknown = initialValue;

  useEffect(() => {
    const localStorageItem = localStorage.getItem(localItem);

    if (!localStorageItem) {
      localStorage.setItem(localItem, JSON.stringify(initialValue));
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
    }
    console.log("effect");
  }, []);

  const [item, setItem] = useState<unknown>(parsedItem);

  const saveItem = (newItem: unknown): void => {
    localStorage.setItem(localItem, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export {useLocalStorage}