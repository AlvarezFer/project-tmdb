import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../estilos.css/moviesDetails.css";
import Navbar from "../commons/Navbar";

const SelectMovie = () => {
  const [select, setSelect] = useState({});
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/movies/${movieId}`)
      .then((res) => setSelect(res.data));
  }, [movieId]);

  const card = select;

  return (
    <>
      {usuario ? <Navbar /> : ""}
      <div className="details-container">
        <img
          className="img-col"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${card.poster_path}`}
          alt=""
        />
        <div className="col">
          <h2>{card.title} </h2>
          <p>{card.overview}</p>
        </div>
      </div>
    </>
  );
};

export default SelectMovie;
