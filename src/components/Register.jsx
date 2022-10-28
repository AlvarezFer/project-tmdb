import axios from "axios";
import React, { useState, useRef } from "react";
import "../estilos.css/register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    ref.current.reset();
    setLoading(true);
    axios
      .post("http://localhost:9000/api/users/register", {
        name,
        lastName,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
        setLoading(false);
        return res.data;
      });
  };

  return (
    <div className="container">
      <h1>FORMULARIO DE REGISTRO</h1>
      <form onSubmit={handleSubmit} ref={ref}>
        <ul>
          <li>
            <label className="n">Nombre:</label>
            <input type="text" onChange={handleName} value={name} />
          </li>
          <li>
            <label className="n">Apellido:</label>
            <input type="text" onChange={handleLastName} value={lastName} />
          </li>
          <li>
            <label className="n">E-mail:</label>
            <input type="email" onChange={handleEmail} value={email} />
          </li>

          <li>
            <label className="n">Contraseña:</label>
            <input type="password" onChange={handlePassword} value={password} />
          </li>
          <li>
            <button type="submit" disabled={loading}>
              Registrarse:
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;
