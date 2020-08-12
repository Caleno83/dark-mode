import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (toggleValue) => {
  const [darkToggle, SetDarkToggle] = useLocalStorage(toggleValue);

  // useEffect(() => {
  //   darkToggle
  //     ? (document.body.className = "dark-mode")
  //     : (document.body.className = null);
  // });

  useEffect(
    () => {
      const className = "dark-mode";
      const element = window.document.body;
      if (darkToggle) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [darkToggle] // Only re-call effect when value changes
  );

  return [darkToggle, SetDarkToggle];
};
