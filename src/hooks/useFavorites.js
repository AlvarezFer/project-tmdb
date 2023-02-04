import { useState, useEffect } from "react";
import axios from "axios";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/favoritos")
      .then((res) => setFavorites(res.data))
      .catch((e) => console.log(e));
  }, []);

  return favorites;
};

export default useFavorites;
