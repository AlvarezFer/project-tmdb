import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../estilos.css/login.css";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const datosUsuario = useContext(AuthContext);

  const { toggleAuth } = datosUsuario;

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
      .then((res) => {
        toggleAuth(res.data);
        Swal.fire({
          title: "Exito",
          text: "Iniciaste sesion de manera exitosa",
          icon: "success",
          allowOutsideClick: false,
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/movies");
          }
        });
      })
      .catch((error) => console.log(error, "es necesario registrarse"));
    Swal.fire({
      title: "Error",
      text: "Debes registrarte para poder ingresar",
      icon: "error",
      allowOutsideClick: false,
    });
  };

  return (
    <div className="container-log">
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
              required
            />
          </li>
          <li>
            <label className="n">Contraseña:</label>
            <input
              className="inp"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
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
