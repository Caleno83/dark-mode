import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (toggleValue) => {
  const [darkToggle, SetDarkToggle] = useLocalStorage(toggleValue);

  // useEffect(() => {
  //   darkToggle
  //     ? (document.body.className = "dark-mode")
  //     : (document.body.className = null);
  // });

  //

  //no need to use useEffect
  const className = "dark-mode";
  const element = window.document.body;
  darkToggle
    ? element.classList.add(className)
    : element.classList.remove(className);

  return [darkToggle, SetDarkToggle];
};
