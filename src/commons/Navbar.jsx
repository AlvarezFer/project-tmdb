// import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../estilos.css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

function BasicExample() {
  const navigate = useNavigate();

  // const datosUsuario = useContext(AuthContext);

  // const { user, isAuthenticated, toggleAuth } = datosUsuario;

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.clear();
    navigate("/");
  };
  const usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        {!usuario ? (
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <NavDropdown title="Register" id="basic-nav-dropdown">
                  <Register />
                </NavDropdown>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <Login />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        ) : (
          <Container>
            <em>
              {" "}
              <h1 className="welcome">BIENVENID@ {usuario.name}</h1>{" "}
            </em>

            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="">Series</Nav.Link>
                <Nav.Link href="">Favoritos</Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        )}
      </Navbar>
    </>
  );
}

export default BasicExample;
