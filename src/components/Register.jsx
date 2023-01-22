import axios from "axios";
import React, { useState } from "react";
import "../estilos.css/register.css";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setLastName("");
    setEmail("");
    setPassword("");

    axios
      .post("http://localhost:9000/api/users/register", {
        name,
        lastName,
        email,
        password,
      })
      .then((res) => {
        return res.data;
      });
    Swal.fire({
      title: "Exito",
      text: "Se registró de manera exitosa",
      icon: "success",
      allowOutsideClick: false,
    });
  };

  return (
    <div className="container">
      <h1 className="tit">REGISTRARSE</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label className="n">Nombre:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </li>
          <li>
            <label className="n">Apellido:</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </li>
          <li>
            <label className="n">E-mail:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </li>
          <li>
            <label className="n">Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </li>
          <br />
          <li>
            <button className="btn-color" type="submit">
              Registrarse
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;
