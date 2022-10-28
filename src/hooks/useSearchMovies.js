import { useState, useEffect } from "react";
import axios from "axios";

const useSearchMovies = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:9000/api/movies/search/movie?m=${search}`)
        .then((res) => setPeliculas(res.data.results))

        .catch((e) => console.log(e));
    } else {
      setPeliculas([]);
    }
  }, [search]);

  return [peliculas, setSearch];
};

export default useSearchMovies;
