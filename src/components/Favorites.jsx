import useFavorites from "../hooks/useFavorites";
import "../estilos.css/favorites.css";
import Navbar from "../commons/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

export const Fav = ({ id, title, poster }) => {
  const del = (e) => {
    axios.delete(`http://localhost:9000/api/favoritos/${id}`).then(() => {
      e.preventDefault();
      window.location.reload();
    });
  };

  return (
    <div className="container-fav" key={id}>
      <div className="p-fav">
        <h1 className="h-title"> {title}</h1>
      </div>
      <div className="img-favs">
        <img
          className="img-fav"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
          alt={title}
        />
        <div className="btn-delete">
          {" "}
          <FaRegTrashAlt
            onClick={del}
            style={{ width: "40px", height: "20px", color: "red" }}
          />
        </div>
      </div>
    </div>
  );
};

const Favorites = () => {
  const favoritos = useFavorites();

  return (
    <>
      {" "}
      <Navbar />
      <h1 className="title-fav" style={{ color: "white", opacity: "0.6" }}>
        TUS PELICULAS FAVORITAS
      </h1>
      <div className="padre">
        {favoritos?.map((favorito) => (
          <Fav
            id={favorito.id}
            title={favorito.title}
            poster={favorito.poster}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
