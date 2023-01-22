import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../estilos.css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const usuario = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    console.log("Cookie borrada");
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      {!usuario ? (
        <Container>
          <h1 className="welcome">BIENVENIDOS A CITYMOVIES</h1>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
          <h1 className="welcome">BIENVENIDO {usuario.name}</h1>

          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="">Series</Nav.Link>
              <Nav.Link href="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}

export default BasicExample;
