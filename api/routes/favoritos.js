const { FavoriteBorder } = require("@material-ui/icons");
const express = require("express");
const { where } = require("sequelize");
const { create } = require("../models/favoritos");
const favRoute = express.Router();
const Favoritos = require("../models/favoritos");
const Users = require("../models/users");

favRoute.post("/", (req, res) => {
  Favoritos.create(req.body)
    .then((fav) => {
      res.status(201).send(fav);
    })
    .catch((error) =>
      console.log(
        error,
        "no pudimos guardar tu favorito, asegurate de no guardar el mismo favorito"
      )
    );
});

favRoute.get("/", (req, res) => {
  Favoritos.findAll()
    .then((fav) => res.status(200).send(fav))
    .catch((error) => console.log(error, "hubo un problema"));
});

favRoute.delete("/:id", (req, res) => {
  const id = req.params.id;

  Favoritos.destroy({ where: { id } })
    .then(() => res.send(" eliminado"))
    .catch((error) => console.log(error, "no se pudo eliminar"));
});

module.exports = favRoute;
