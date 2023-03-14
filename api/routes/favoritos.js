const express = require("express");
const favRoute = express.Router();
const Favoritos = require("../models/favoritos");
const Users = require("../models/users");

favRoute.post("/", async (req, res) => {
  const { title, poster, movieId, userId } = req.body;

  try {
    // Busca si ya existe el favorito
    const existingFav = await Favoritos.findOne({
      where: { movieId, userId },
    });

    // Si ya existe, devuelve un mensaje de error
    if (existingFav) {
      return res.status(400).send("El favorito ya existe");
    }

    // Crea el favorito
    const fav = await Favoritos.create({ title, poster, movieId, userId });

    // Asocia el favorito con el usuario correspondiente
    const user = await Users.findByPk(userId);
    await user.addFavorito(fav);

    res.status(201).send(fav);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al guardar el favorito");
  }
});

// Obtener los favoritos de un usuario
favRoute.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await Users.findByPk(userId, {
      include: { model: Favoritos, through: { attributes: [] } },
    });
    res.json(user.favoritos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

favRoute.delete("/:id", (req, res) => {
  const id = req.params.id;

  Favoritos.destroy({ where: { id } })
    .then(() => res.send(" eliminado"))
    .catch((error) => console.log(error, "no se pudo eliminar"));
});

module.exports = favRoute;
