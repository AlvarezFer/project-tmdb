import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import Search from "./Search";
import "../estilos.css/movies.css";
import Navbar from "../commons/Navbar";
import "../estilos.css/button.css";
import axios from "axios";
import useSearchMovies from "../hooks/useSearchMovies";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const Card = ({ title, poster, movieId, vote }) => {
  const [favorito, setFavorito] = useState(true);
  const [fav, setFav] = useState("");
  const [percentaje, setPercentaje] = useState(0);
  const { theme } = useContext(ThemeContext);
  const datosUsuario = useContext(AuthContext);
  const userId = datosUsuario.user.id;

  function ToggleFavorito() {
    setFavorito(!favorito);
    setFav({ title, poster, movieId });
  }

  useEffect(() => {
    if (fav) {
      const data = { title, poster, movieId, userId };
      axios
        .post("http://localhost:9000/api/favoritos", data)
        .then((res) => {
          Swal.fire({
            title: "Exito",
            text: `Se agrego ${title} de manera exitosa`,
            icon: "success",
            allowOutsideClick: false,
            customClass: {
              popup: "my-popup-class",
            },
          });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            Swal.fire({
              title: "Error",
              text: "Este favorito ya fue agregado",
              icon: "error",
              allowOutsideClick: false,
              customClass: {
                popup: "my-popup-class",
              },
            });
          } else {
            console.log(error, "Error al agregar favorito");
          }
        });
    }
  }, [fav]);

  useEffect(() => {
    const result = (vote / 10) * 100;
    const roundedResult = result.toFixed();
    setPercentaje(roundedResult);
  }, [vote]);

  return (
    <>
      <div className="container-movies" style={{ backgroundColor: theme.ui }}>
        <div className="element">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#ccc"
              strokeWidth="14"
              fill="none"
            />
            <path
              stroke="#ffbf00"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (percentaje * 251.2) / 100}
              d="M50,10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "26px" }}
            >
              {percentaje}%
            </text>
          </svg>
        </div>
        <Link
          to={`/movies/${movieId}`}
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <div className="p-movies">
            <h2 className="h-title" style={{ color: theme.sintax }}>
              {title}
            </h2>
          </div>
        </Link>
        <div className="img-movies">
          <Link to={`/movies/${movieId}`}>
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
              alt={title}
            />
          </Link>
          {
            <>
              <div className="div-btn" onClick={ToggleFavorito}>
                {favorito ? (
                  <button className="btn">{<FaHeart size={20} />}</button>
                ) : (
                  <button className="btn">
                    {<FaHeart size={20} color="red" />}
                  </button>
                )}
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

const Movies = () => {
  const peliculas = useMovies();
  const [resultados, buscar] = useSearchMovies();
  const datosUsuario = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated } = datosUsuario;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  return (
    <div style={{ backgroundColor: theme.ui }}>
      {isAuthenticated ? <Navbar /> : ""}
      <Search buscador={buscar} />
      {isLoading ? (
        <div className="spinner">
          <ClipLoader size={150} color="#123456" className="spinner" />
          <h1 className="spinner">Loading...</h1>
        </div>
      ) : (
        <div className="container-f">
          {resultados.length
            ? resultados.map((pelicula) => (
                <Card
                  key={pelicula.id}
                  title={pelicula.title}
                  poster={pelicula.poster_path}
                  movieId={pelicula.id}
                  vote={pelicula.vote_average}
                />
              ))
            : peliculas.map((pelicula) => (
                <Card
                  key={pelicula.id}
                  title={pelicula.title}
                  poster={pelicula.poster_path}
                  movieId={pelicula.id}
                  vote={pelicula.vote_average}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
