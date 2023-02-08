import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../estilos.css/moviesDetails.css";
import Navbar from "../commons/Navbar";
// import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SelectMovie = () => {
  const [select, setSelect] = useState({});
  // const { theme } = useContext(ThemeContext);

  const datosUsuario = useContext(AuthContext);

  const { isAuthenticated } = datosUsuario;

  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/movies/${movieId}`)
      .then((res) => setSelect(res.data));
  }, [movieId]);

  const card = select;

  return (
    <>
      {isAuthenticated ? <Navbar /> : ""}
      <div className="details-container">
        <img
          className="img-col"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${card.poster_path}`}
          alt=""
        />
        <div className="col">
          <h2 className="h-details">{card.title} </h2>
          <p className="p-details">{card.overview}</p>
        </div>
      </div>
    </>
  );
};

export default SelectMovie;
