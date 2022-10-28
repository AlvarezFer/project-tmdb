const usersRoute = require("./users");
const peliculasRoute = require("./movies");
const express = require("express");

const routes = express.Router();

routes.use("/users", usersRoute);
routes.use("/movies", peliculasRoute);

module.exports = routes;
