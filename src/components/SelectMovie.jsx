import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../estilos.css/moviesDetails.css";
import Navbar from "../commons/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeContext";

const SelectMovie = () => {
  const [select, setSelect] = useState({});
  const datosUsuario = useContext(AuthContext);
  const { isAuthenticated } = datosUsuario;
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

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
      {" "}
      <div style={{ backgroundColor: theme.ui }} className="container-det">
        {" "}
        {isAuthenticated ? <Navbar /> : ""}
        {isLoading ? (
          <div className="spinner">
            <ClipLoader size={150} color="#123456" className="spinner" />
            <h1 className="spinner"> Loading...</h1>
          </div>
        ) : (
          <div
            className="details-container"
            style={{ backgroundColor: theme.ui }}
          >
            <img
              className="img-col"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${card.poster_path}`}
              alt=""
            />
            <div className="col">
              <h2 className="h-details" style={{ color: theme.sintax }}>
                {card.title}{" "}
              </h2>
              <p className="p-details" style={{ color: theme.sintax }}>
                {card.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectMovie;
