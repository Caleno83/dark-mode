import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (toggleValue) => {
    
  const [darkToggle, SetDarkToggle] = useLocalStorage(toggleValue);

  useEffect(() => {
    darkToggle
      ? (document.body.className = "dark-mode")
      : (document.body.className = null);
  });

  return [darkToggle, SetDarkToggle];
};
