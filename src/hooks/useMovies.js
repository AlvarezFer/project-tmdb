import { useState, useEffect } from "react";
import axios from "axios";

const useMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/movies")
      .then((res) => setPeliculas(res.data.results))

      .catch((e) => console.log(e));
  }, []);

  return peliculas;
};

export default useMovies;
