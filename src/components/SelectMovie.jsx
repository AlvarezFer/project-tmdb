import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../estilos.css/moviesDetails.css";
import Navbar from "../commons/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ClipLoader } from "react-spinners";

const SelectMovie = () => {
  const [select, setSelect] = useState({});
  const datosUsuario = useContext(AuthContext);
  const { isAuthenticated } = datosUsuario;
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/movies/${movieId}`)
      .then((res) => setSelect(res.data));
  }, [movieId]);

  const card = select;

  return (
    <>
      {isAuthenticated ? <Navbar /> : ""}
      {isLoading ? (
        <div className="spinner" style={{ marginTop: "200px" }}>
          <ClipLoader size={150} color="#123456" className="spinner" />
          <h1 className="spinner"> Loading...</h1>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SelectMovie;
