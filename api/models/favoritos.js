const Sequelize = require("sequelize");
const db = require("../config/index");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
  {
    title: { type: Sequelize.STRING, allowNull: false, unique: true },

    poster: { type: Sequelize.STRING, allowNull: false, unique: true },

    movieId: { type: Sequelize.INTEGER, allowNull: false, unique: true },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },

  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;
