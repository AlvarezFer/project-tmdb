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
import { useContext } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const Card = ({ title, poster, movieId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [favorito, setFavorito] = useState(true);
  const [fav, setFav] = useState("");

  const datosUsuario = useContext(AuthContext);

  const userId = datosUsuario.user.id;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  function ToggleFavorito() {
    setFavorito(!favorito);
    setFav(title, poster, movieId);
  }

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
        });
      })
      .catch((error) => console.log(error, "es necesario registrarse"));
    Swal.fire({
      title: "Error",
      text: "Este favorito ya fue agregado",
      icon: "error",
      allowOutsideClick: false,
    });
  }

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <ClipLoader size={150} color="#123456" className="spinner" />
          <h1 className="spinner"> Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="container-movies">
            <Link
              to={`/movies/${movieId}`}
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <div className="p-movies">
                <h2 className="h-title">{title}</h2>
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
                      <button className="btn"> Add to favorites</button>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Movies = () => {
  const peliculas = useMovies();
  const [resultados, buscar] = useSearchMovies();
  const datosUsuario = useContext(AuthContext);
  const { isAuthenticated } = datosUsuario;

  return (
    <div>
      {isAuthenticated ? <Navbar /> : ""}

      <Search buscador={buscar} />

      {resultados.length ? (
        <div>
          {resultados.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster={pelicula.poster_path}
              movieId={pelicula.id}
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
              movieId={pelicula.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;

// import { Link } from "react-router-dom";
// import useMovies from "../hooks/useMovies";
// import Search from "./Search";
// import "../estilos.css/movies.css";
// import Navbar from "../commons/Navbar";
// import "../estilos.css/button.css";
// import axios from "axios";
// import useSearchMovies from "../hooks/useSearchMovies";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
// import useFavorites from "../hooks/useFavorites";
// import { useEffect } from "react";
// import { ClipLoader } from "react-spinners";

// const Card = ({ title, poster, movieId, id }) => {
//   const [fav, setFav] = useState("");
//   const [tog, setTog] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);
//   }, []);

//   // const [favorites, setFavorites] = useState([]);

//   // useEffect(() => {
//   //   const storedFavorites = localStorage.getItem("favorites");
//   //   if (storedFavorites) {
//   //     setFavorites(JSON.parse(storedFavorites));
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem("favorites", JSON.stringify(fav));
//   // }, [favorites]);

//   const favMoviesSubmit = () => {
//     if (tog === true) {
//       setTog(false);
//       setFav(title, poster, movieId);
//     } else {
//       setTog(true);
//       setFav("");
//     }

//     if (tog) {
//       axios
//         .post("http://localhost:9000/api/favoritos", {
//           title,
//           poster,
//           movieId,
//         })
//         .then((res) => res.data);
//     }
//   };

//   const removeFav = () => {
//     console.log(id);
//     axios
//       .delete(`http://localhost:9000/api/favoritos/${id}`)
//       .then((del) => console.log(del.data));
//   };

//   return (
//     <body>
//       {isLoading ? (
//         <div className="spinner">
//           <ClipLoader size={150} color="#123456" className="spinner" />
//           <h1 className="spinner"> Loading...</h1>
//         </div>
//       ) : (
//         <div>
//           <div className="container-movies">
//             <Link
//               to={`/movies/${movieId}`}
//               style={{ textDecoration: "none", textAlign: "center" }}
//             >
//               <div className="p-movies">
//                 <h2 className="h-title">{title}</h2>
//               </div>
//             </Link>
//             <div className="img-movies">
//               <Link to={`/movies/${movieId}`}>
//                 <img
//                   className="img-movie"
//                   src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
//                   alt={title}
//                 />
//               </Link>
//               {
//                 <>
//                   <div className="fav-btn" onClick={favMoviesSubmit}>
//                     {fav ? (
//                       <FaHeart style={{ color: "yellow", fontSize: "25px" }} />
//                     ) : (
//                       <FaRegHeart
//                         style={{ color: "yellow", fontSize: "25px" }}
//                       />
//                     )}
//                   </div>
//                 </>
//               }
//             </div>
//           </div>
//         </div>
//       )}
//     </body>
//   );
// };

// const Movies = () => {
//   const peliculas = useMovies();
//   const [resultados, buscar] = useSearchMovies();
//   const datosUsuario = useContext(AuthContext);
//   const { isAuthenticated } = datosUsuario;

//   const idfavorites = useFavorites();

//   return (
//     <div>
//       {isAuthenticated ? <Navbar /> : ""}

//       <Search buscador={buscar} />

//       {resultados.length ? (
//         <div>
//           {resultados.map((pelicula) => (
//             <Card
//               key={pelicula.id}
//               title={pelicula.title}
//               poster={pelicula.poster_path}
//               movieId={pelicula.id}
//             />
//           ))}
//         </div>
//       ) : (
//         <div>
//           {peliculas.map((pelicula) => (
//             <Card
//               key={pelicula.id}
//               title={pelicula.title}
//               poster={pelicula.poster_path}
//               movieId={pelicula.id}
//             />
//           ))}
//           {idfavorites.map((f) => (
//             <Card key={f.id} id={f.id} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Movies;
