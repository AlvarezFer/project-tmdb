import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/users/login", { email, password, name })
      .then((res) => navigate("/movies"))
      .catch((error) => setError(error));
  };

  return (
    <div className="container">
      <h1 className="n">INGRESAR</h1>

      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label className="n">Nombre:</label>
            <input type="text" onChange={handleName} value={name} />
          </li>
          <li>
            <label className="n">E-mail:</label>
            <input type="text" onChange={handleEmail} value={email} />
          </li>
          <li>
            <label className="n">Contraseña:</label>
            <input type="password" onChange={handlePassword} value={password} />
          </li>

          <li>
            <button type="submit">Ingresar:</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
