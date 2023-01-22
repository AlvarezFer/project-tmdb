const { FavoriteBorder } = require("@material-ui/icons");
const express = require("express");
const { where } = require("sequelize");
const favRoute = express.Router();
const Favoritos = require("../models/favoritos");
const Users = require("../models/users");

favRoute.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = favRoute;
