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
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function BasicExample() {
  const navigate = useNavigate();
  const { theme, mode, toggleTheme } = useContext(ThemeContext);

  const datosUsuario = useContext(AuthContext);

  const { user, isAuthenticated } = datosUsuario;

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    // localStorage.clear("user");
    // window.location.reload();

    navigate("/");
  };

  // const usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {!isAuthenticated ? (
        <Navbar
          expand="md"
          fixed="top"
          className="custom-navbar"
          style={{ background: theme.ui, color: theme.syntax }}
        >
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
            {mode === "light" ? (
              <FaMoon onClick={toggleTheme} />
            ) : (
              <FaSun onClick={toggleTheme} style={{ color: "white" }} />
            )}
          </Container>
        </Navbar>
      ) : (
        <Navbar
          expand="md"
          fixed="top"
          className="custom-navbar"
          style={{ background: theme.ui, color: theme.syntax }}
        >
          <Container>
            <em>
              {" "}
              <h1 className="welcome">BIENVENID@ {user.name}</h1>{" "}
            </em>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Brand href="/">Home</Navbar.Brand>

                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="">Series</Nav.Link>
                <Nav.Link href="/movies/favorites">Favorites</Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}>
                  Log out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {mode === "light" ? (
              <FaMoon onClick={toggleTheme} />
            ) : (
              <FaSun onClick={toggleTheme} style={{ color: "white" }} />
            )}
          </Container>{" "}
        </Navbar>
      )}
    </>
  );
}

export default BasicExample;
