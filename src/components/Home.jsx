import "../estilos.css/home.css";

import Navbar from "../commons/Navbar";

const Home = () => {
  return (
    <>
      {" "}
      <Navbar />
      <body className="bg-image">
        <h1 className="title">THE MOVIE HOUSE</h1>

        <p className="p-title">
          Millones de películas, programas de televisión por descubrir.
        </p>
        <p className="p-title"> Explora ahora. </p>
      </body>
    </>
  );
};

export default Home;
