import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const datosUsuario = useContext(AuthContext);
  const userId = datosUsuario.user ? datosUsuario.user.id : null;

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:9000/api/favoritos/${userId}`)
        .then((res) => setFavorites(res.data))
        .catch((e) => console.log(e));
    }
  }, [userId]);

  return favorites;
};

export default useFavorites;
