import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isLog, redirectTo = "/" }) => {
  console.log(isLog);
  if (!isLog) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

const RutaPrivate = () => {
  const [isLog, setIsLog] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/users/secret", { withCredentials: true })
      .then((res) => setIsLog(res.data))
      .catch((error) => (error, "error de token"));
  }, []);

  return isLog;
};

export default RutaPrivate;
