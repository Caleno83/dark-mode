import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  
  const [storedValue, setStoredValue] = useState(() => {
    // To retrieve an item from localStorage, call localStorage.getItem(key)
    // If that item doesn't exist, it will return undefined
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  //now we are creating a setter function
  const setValue = (value) => {
    //save state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
