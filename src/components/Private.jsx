import React from "react";
import { Route, Navigate } from "react-router-dom";

const RutaProtegida = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? (
          <Component {...rest} />
        ) : (
          <Navigate to="/" replace={true} />
        )
      }
    />
  );
};

export default RutaProtegida;

// export const ProtectedRoute = ({ children, isLog, redirectTo = "/" }) => {
//   console.log(isLog);
//   if (!isLog) {
//     return <Navigate to={redirectTo} />;
//   }
//   return children;
// };

// const RutaPrivate = () => {
//   const [isLog, setIsLog] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:9000/api/users/secret", { withCredentials: true })
//       .then((res) => setIsLog(res.data))
//       .catch((error) => (error, "error de token"));
//   }, []);

//   return isLog;
// };

// export default RutaPrivate;
