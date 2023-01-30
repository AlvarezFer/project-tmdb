const express = require("express");
const usersRoute = express.Router();
const Users = require("../models/users");
const { generateToken, validateToken } = require("../config/tokens");

usersRoute.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

usersRoute.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.status(401).send();

    user.validatePassword(password).then((isValid) => {
      if (!isValid) res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
      };
      const token = generateToken(payload);

      res.cookie("token", token);
      res.send(payload);
    });
  });
});

usersRoute.get("/secret", (req, res) => {
  const token = req.cookies.token;

  const { user } = validateToken(token);

  res.send(user);
});

usersRoute.get("/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) res.sendStatus(401);

  res.send(user);
});

usersRoute.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

module.exports = usersRoute;
