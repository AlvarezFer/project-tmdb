import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import Search from "./Search";
import "../estilos.css/movies.css";
import useSearchMovies from "../hooks/useSearchMovies";

const Card = ({ title, poster, id }) => {
  return (
    <div className="container-movies">
      <Link to={`/movies/${id}`}>
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
      </div>
    </div>
  );
};

const Movies = () => {
  const peliculas = useMovies();
  const [resultados, buscar] = useSearchMovies();

  return (
    <div>
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
