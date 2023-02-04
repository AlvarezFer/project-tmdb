const Sequelize = require("sequelize");
const db = require("../config/index");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
  {
    title: { type: Sequelize.STRING, allowNull: false, unique: true },

    poster: { type: Sequelize.STRING, allowNull: false, unique: true },

    movieId: { type: Sequelize.STRING, allowNull: false, unique: true },
  },

  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;
