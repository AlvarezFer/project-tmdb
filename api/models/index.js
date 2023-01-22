const Users = require("./users");
const Favoritos = require("./favoritos");

Users.hasMany(Favoritos);

Favoritos.belongsTo(Users, { as: "author" });

module.exports = { Users, Favoritos };
