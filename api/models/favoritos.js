const Sequelize = require("sequelize");
const db = require("../config/index");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
  {
    title: { type: Sequelize.STRING, allowNull: false },

    poster: { type: Sequelize.STRING, allowNull: false },

    movieId: { type: Sequelize.INTEGER, allowNull: false },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },

  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;
