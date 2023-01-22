import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos.css/login.css";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    axios
      .post(
        "http://localhost:9000/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)));
    Swal.fire({
      title: "Exito",
      text: "Iniciaste sesion de manera exitosa",
      icon: "success",
      allowOutsideClick: false,
    })
      .then((res) => {
        if (res.isConfirmed) {
          navigate("/movies");
        }
      })
      .catch((error) => error);
  };

  return (
    <div className="container">
      <h1 className="tle">INICIAR SESION </h1>

      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label className="n">E-mail:</label>
            <input
              className="inp"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </li>
          <li>
            <label className="n">Contraseña:</label>
            <input
              className="inp"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </li>
          <br />
          <li>
            <button className="btn-color" type="submit">
              Iniciar sesión
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
