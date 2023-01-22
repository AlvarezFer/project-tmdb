import { createContext, useState } from "react";

//definir un estado inicial para nuestro contexto
const initialState = {
  mode: "light", // esta propeidad solo deberia poder tener 2 valores: 'light' y 'dark'
  theme: themes.light, // el set de temas actual
  toggleTheme: () => null, // esta función deberia togglear los temas
};

export const ThemeContext = createContext(initialState);
