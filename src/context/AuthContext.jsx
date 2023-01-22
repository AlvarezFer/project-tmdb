import { createContext, useState } from "react";

//definir un estado inicial para nuestro contexto
const initialState = {
  user: null, //informacion del usuario
  isAuthenticated: false, //si esta o no logueado
  toggleAuth: () => null, //funcion para actualizar el contexto
};

export const AuthContext = createContext(initialState);

//componente provider

const AuthContextProvider = ({ children }) => {
  const [isLoggedId, setIsLoggedId] = useState({
    user: null,
    isAuthenticated: false,
  });

  const toggleAuth = (user) => {
    setIsLoggedId({
      user: user,
      isAuthenticated: !isLoggedId.isAuthenticated,
    });
  };

  return (
    <AuthContext.Provider value={{ ...isLoggedId, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
