import "../estilos.css/home.css";

import Navbar from "../commons/Navbar";

const Home = () => {
  return (
    <>
      {" "}
      <Navbar />
      <body className="bg-image">
        <h1 className="title" style={{ marginBottom: "20px" }}>
          BIENVENIDOS A CITYMOVIES
        </h1>{" "}
        <p className="p-title">
          Millones de películas, programas de televisión por descubrir.
        </p>
        <p className="p-title"> Explora ahora. </p>
      </body>
    </>
  );
};

export default Home;
