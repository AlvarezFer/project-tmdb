import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <h1
          style={{
            fontSize: "100px",
            textAlign: "center",
            color: "white",
          }}
        >
          ERROR 404
        </h1>
        <p
          style={{
            fontSize: "80px",
            textAlign: "center",
            color: "white",
          }}
        >
          NOT FOUND PAGE
        </p>
        {usuario ? (
          <div style={{ textAlign: "center" }}>
            <Link to="/movies">
              <button
                style={{
                  border: "none",
                  fontSize: "20px",
                  borderRadius: "4px",
                  backgroundColor: "red",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <button
                style={{
                  border: "none",
                  fontSize: "20px",
                  borderRadius: "4px",
                  backgroundColor: "red",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NotFound;
