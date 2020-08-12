import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (toggleValue) => {
    const [darkToggle, SetDarkToggle] = useLocalStorage(toggleValue);
    useEffect(() =>
    darkToggle ? document.querySelector("dark-mode"): "")

    

    return[darkToggle, SetDarkToggle];

}

