// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, redirectTo, ...props }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return <Route {...props} />;
};

const RutaPrivada = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...rest
}) => (
  <ProtectedRoute
    {...rest}
    isAuthenticated={isAuthenticated}
    redirectTo={redirectTo}
    render={(props) => <Component {...props} />}
  />
);

export default RutaPrivada;

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
