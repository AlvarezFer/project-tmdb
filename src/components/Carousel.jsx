import Carousel from "react-bootstrap/Carousel";
import "../estilos.css/carousel.css";
import avatar from "../estilos.css/imagenes.jpg/photo.jpeg";
import purgue from "../estilos.css/imagenes.jpg/thepurge.jpg";
import back from "../estilos.css/imagenes.jpg/backtt.jpg";
import cine from "../estilos.css/imagenes.jpg/cines.jpg";

import Navbar from "../commons/Navbar";

function DarkVariantExample() {
  return (
    <>
      <Navbar />

      <Carousel variant="dark">
        <Carousel.Item className="car-item">
          <img className="d-block w-100" src={cine} alt="First slide" />

          <Carousel.Caption>
            <h1 className="title-i">BIENVENIDOS A NOTFLIX</h1>
            <p className="p-inicial">
              Millones de películas, programas de televisión por descubrir.
              Explora ahora.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <img className="d-block w-100" src={purgue} alt="First slide" />
          <Carousel.Caption>
            <p className="p-1">Terror</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <img className="d-block w-100" src={back} alt="Second slide" />
          <Carousel.Caption>
            <p className="p-2">Ciencia Ficción</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <img className="d-block w-100" src={avatar} alt="Third slide" />
          <Carousel.Caption>
            <p className="p-1">Fantasia</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DarkVariantExample;
