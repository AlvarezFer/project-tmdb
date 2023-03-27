import useFavorites from "../hooks/useFavorites";
import "../estilos.css/favorites.css";
import Navbar from "../commons/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export const Fav = ({ id, title, poster }) => {
  const { theme } = useContext(ThemeContext);

  const del = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:9000/api/favoritos/${id}`).then(() => {
      Swal.fire({
        title: "Exito",
        text: `Se Elimino ${title} a favoritos`,
        icon: "success",
        allowOutsideClick: false,
        customClass: {
          popup: "my-popup-class",
        },
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.reload();
        }
      });
    });
  };

  return (
    <>
      <div
        className="container-fav"
        key={id}
        style={{ backgroundColor: theme.ui }}
      >
        <div className="p-fav">
          <h1 className="h-title" style={{ color: theme.sintax }}>
            {title}
          </h1>
        </div>
        <div className="img-favs">
          <img
            className="img-fav"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
            alt={title}
          />
          <div className="btn-delete" style={{ cursor: "pointer" }}>
            <button className="btn">
              <FaRegTrashAlt
                onClick={del}
                style={{ width: "40px", height: "20px", color: "red" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const favoritos = useFavorites();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar /> <br />
      <br />
      {isLoading ? (
        <div className="spinner" style={{ backgroundColor: theme.ui }}>
          <ClipLoader size={150} color="#123456" className="spinner" />
          <h1 className="spinner" style={{ backgroundColor: theme.ui }}>
            Loading...
          </h1>
        </div>
      ) : (
        <div className="container-favmap" style={{ backgroundColor: theme.ui }}>
          <br />
          <h1
            className="title-fav"
            style={{ color: theme.sintax, backgroundColor: theme.ui }}
          >
            TUS PELICULAS FAVORITAS
          </h1>
          <div className="padre" style={{ backgroundColor: theme.ui }}>
            {favoritos?.map((favorito) => (
              <Fav
                key={favorito.id}
                id={favorito.id}
                title={favorito.title}
                poster={favorito.poster}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
