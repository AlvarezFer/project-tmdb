import React from "react";
import { Link } from "react-router-dom";
import "../estilos.css/ingreso.css";

const Buttons = () => {
  return (
    <div className="container-buttons">
      <nav className="nav-bar">
        <header>
          <h1>BIENVENIDOS A CITYMOVIES</h1>
        </header>
        <main>
          <Link to="/login">
            <button className="btn-uno" type="submit">
              Ingresar
            </button>
          </Link>
          <Link to="/register">
            <button className="btn-uno" type="submit">
              Registrarse
            </button>
          </Link>
        </main>
      </nav>
    </div>
  );
};

export default Buttons;
