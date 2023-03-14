const Users = require("./users");
const Favoritos = require("./favoritos");

// Users.hasMany(Favoritos);

// Favoritos.belongsTo(Users, { as: "author" });

Users.belongsToMany(Favoritos, { through: "UserFavoritos" });
Favoritos.belongsToMany(Users, { through: "UserFavoritos" });

module.exports = { Users, Favoritos };
