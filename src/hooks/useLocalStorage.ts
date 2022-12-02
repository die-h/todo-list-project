import { useEffect, useState } from "react";

function useLocalStorage<T>(
  localItem: string,
  initialValue: T
): [T, (newItem: T) => void] {
  let parsedItem: T = initialValue;
  const [item, setItem] = useState<T>(parsedItem);

  useEffect(() => {
    const localStorageItem = localStorage.getItem(localItem);

    if (!localStorageItem) {
      localStorage.setItem(localItem, JSON.stringify(initialValue));
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
    }
  }, []);

  const saveItem = (newItem: T): void => {
    localStorage.setItem(localItem, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
