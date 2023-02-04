import { createContext, useEffect, useState } from "react";
import themes from "../utils/themes";

//definir un estado inicial para nuestro contexto
const initialState = {
  mode: "light", // esta propeidad solo deberia poder tener 2 valores: 'light' y 'dark'
  theme: themes.light, // el set de temas actual
  toggleTheme: () => null, // esta función deberia togglear los temas
};

export const ThemeContext = createContext(initialState);

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => setIsLightTheme(!isLightTheme);

  useEffect(() => {
    const isDark = localStorage.getItem("light") === "true";
    setIsLightTheme(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  const value = {
    toggleTheme,
    mode: isLightTheme ? "light" : "dark",
    theme: isLightTheme ? themes.light : themes.dark,
  };

  return (
    <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
