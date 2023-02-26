// import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../estilos.css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { useNavigate, Link } from "react-router-dom";
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
    navigate("/");
    window.location.reload();
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
                <Navbar.Brand>
                  {" "}
                  <Link to="/" className="nav-title">
                    {" "}
                    Home{" "}
                  </Link>
                </Navbar.Brand>
                <NavDropdown
                  title="Register"
                  id="basic-nav-dropdown"
                  className="nav-title"
                >
                  <Register />
                </NavDropdown>
                <NavDropdown
                  title="Login"
                  id="basic-nav-dropdown"
                  className="nav-title"
                >
                  <Login />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className="mode">
              {mode === "light" ? (
                <FaMoon onClick={toggleTheme} />
              ) : (
                <FaSun onClick={toggleTheme} style={{ color: "white" }} />
              )}
            </div>
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
            <div>
              {" "}
              <h1 className="welcome">Bienvenid@ {user.name}</h1>{" "}
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Navbar.Brand>
                  {" "}
                  <Link to="/" className="nav-title">
                    Home
                  </Link>
                </Navbar.Brand>

                <Nav.Link>
                  <Link to="/movies" className="nav-title">
                    Movies{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="#" className="nav-title">
                    Series
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/movies/favorites" className="nav-title">
                    {" "}
                    Favorites{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  <Link to="/" className="nav-title">
                    {" "}
                    Logout
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="mode">
              {mode === "light" ? (
                <FaMoon onClick={toggleTheme} />
              ) : (
                <FaSun onClick={toggleTheme} style={{ color: "white" }} />
              )}{" "}
            </div>
          </Container>{" "}
        </Navbar>
      )}
    </>
  );
}

export default BasicExample;
