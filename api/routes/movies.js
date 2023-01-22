const { default: axios } = require("axios");
const express = require("express");
const peliculasRoute = express.Router();
const Peliculas = require("../models/favoritos");
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
peliculasRoute.get("/", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((e) => res.statusCode(503).json({ e }));
});

peliculasRoute.get("/search/movie", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${req.query.m}&api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((json) => res.json(json));
});

peliculasRoute.get("/:id", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = peliculasRoute;
