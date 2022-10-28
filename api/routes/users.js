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
    if (!user) return res.status(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        lastname: user.lastName,
      };
      const token = generateToken(payload);
      console.log(token);

      res.cookie("token", token).send(payload);
    });
  });
});

usersRoute.get("/logueado", (req, res) => {
  const token = req.cookies.token;

  const { user } = validateToken(token);

  console.log("payload", user);

  res.send(payload);
});

module.exports = usersRoute;
