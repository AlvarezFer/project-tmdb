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
import Swal from "sweetalert2";

function BasicExample() {
  const navigate = useNavigate();
  const { theme, mode, toggleTheme } = useContext(ThemeContext);
  const datosUsuario = useContext(AuthContext);
  const { user, isAuthenticated } = datosUsuario;

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");

    Swal.fire({
      title: "Cerrar Sesión",
      text: "¿Está seguro que desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cargando",
          html: "Cerrando sesión...",
          timerProgressBar: true,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 1000);
          },
        });
      }
    });
  };

  return (
    <>
      {!isAuthenticated ? (
        <Navbar expand="md" fixed="top" className="custom">
          <Container className="w-100">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="mx-auto justify-content-center">
                <Navbar.Brand>
                  <Link to="/" className="nav-title">
                    Home
                  </Link>
                </Navbar.Brand>
                <NavDropdown title="Register" id="basic-nav-dropdown">
                  <Register />
                </NavDropdown>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <Login />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          expand="md"
          fixed="top"
          className="custom-navbar"
          style={{ backgroundColor: theme.ui }}
        >
          <Container>
            <div>
              {" "}
              <h1 className="welcome" style={{ color: theme.sintax }}>
                Welcome {user.name}
              </h1>{" "}
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto ">
                <Nav.Link>
                  <Link
                    to="/movies"
                    className="nav-title"
                    style={{ color: theme.sintax }}
                  >
                    Movies{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="#"
                    className="nav-title"
                    style={{ color: theme.sintax }}
                  >
                    Series
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/movies/favorites"
                    className="nav-title"
                    style={{ color: theme.sintax }}
                  >
                    Favorites
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  <Link className="nav-title" style={{ color: theme.sintax }}>
                    Log out
                  </Link>
                </Nav.Link>
              </Nav>
              <div className="mode">
                {mode === "light" ? (
                  <FaMoon
                    onClick={toggleTheme}
                    style={{ color: "blue", cursor: "pointer" }}
                  />
                ) : (
                  <FaSun
                    onClick={toggleTheme}
                    style={{ color: "#f3f374", cursor: "pointer" }}
                  />
                )}{" "}
              </div>
            </Navbar.Collapse>
          </Container>{" "}
        </Navbar>
      )}
    </>
  );
}

export default BasicExample;
