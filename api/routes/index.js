const usersRoute = require("./users");
const peliculasRoute = require("./movies");
const favRoute = require("./favoritos");
const express = require("express");

const routes = express.Router();

routes.use("/users", usersRoute);
routes.use("/movies", peliculasRoute);
routes.use("/favoritos", favRoute);

module.exports = routes;
