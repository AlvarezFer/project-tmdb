const Sequelize = require("sequelize");
const db = require("../config/index");

class Peliculas extends Sequelize.Model {}

Peliculas.init(
  {},

  { sequelize: db, modelName: "peliculas" }
);

module.exports = Peliculas;
