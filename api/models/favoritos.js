const Sequelize = require("sequelize");
const db = require("../config/index");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
  {
    title: { type: Sequelize.STRING, allowNull: false, unique: true },

    img: { type: Sequelize.STRING, allowNull: false },
  },

  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;
