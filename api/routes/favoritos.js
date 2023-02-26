const { FavoriteBorder } = require("@material-ui/icons");
const express = require("express");
const { where } = require("sequelize");
const { create } = require("../models/favoritos");
const favRoute = express.Router();
const Favoritos = require("../models/favoritos");
const Users = require("../models/users");

favRoute.post("/", async (req, res) => {
  const { title, poster, movieId, userId } = req.body;

  try {
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

favRoute.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const favoritos = await Favoritos.findAll({
      where: { userId: userId },
      include: { model: Users, as: "author" },
    });
    res.json(favoritos);
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
