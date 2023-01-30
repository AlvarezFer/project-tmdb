import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import Search from "./Search";
import "../estilos.css/movies.css";
import Navbar from "../commons/Navbar";
import "../estilos.css/button.css";
import axios from "axios";
import useSearchMovies from "../hooks/useSearchMovies";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Card = ({ title, poster, id }) => {
  const [fav, setFav] = useState("");
  const [tog, setTog] = useState(true);

  const favMoviesSubmit = () => {
    if (tog === true) {
      setTog(false);
      setFav(title, poster, id);
    } else {
      setTog(true);
      setFav("");
    }

    if (tog) {
      console.log(title, poster, id);

      axios
        .post("http://localhost:9000/api/favoritos", {
          title,
          poster,
          id,
        })
        .then((res) => res.data);
    } else {
      console.log("entraste al delete");
    }
  };

  return (
    <div className="container-movies">
      <div className="fav-div"> </div>
      <Link
        to={`/movies/${id}`}
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <div className="p-movies">
          <h2 className="h-title">{title}</h2>
        </div>
      </Link>
      <div className="img-movies">
        <Link to={`/movies/${id}`}>
          <img
            className="img-movie"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
            alt={title}
          />
        </Link>
        {
          <div className="fav-btn" onClick={favMoviesSubmit}>
            {fav ? (
              <FaHeart style={{ color: "yellow", fontSize: "25px" }} />
            ) : (
              <FaRegHeart style={{ color: "yellow", fontSize: "25px" }} />
            )}
          </div>
        }
      </div>
    </div>
  );
};

const Movies = () => {
  const peliculas = useMovies();
  const [resultados, buscar] = useSearchMovies();

  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div>
      {usuario ? <Navbar /> : ""}

      <Search buscador={buscar} />

      {resultados.length ? (
        <div>
          {resultados.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster={pelicula.poster_path}
              id={pelicula.id}
            />
          ))}
        </div>
      ) : (
        <div>
          {peliculas.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster={pelicula.poster_path}
              id={pelicula.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
