const Sequelize = require("sequelize");
const db = require("../config/index");
const brcypt = require("bcrypt");

class Users extends Sequelize.Model {
  hash(password, salt) {
    return brcypt.hash(password, salt);
  }
  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

Users.init(
  {
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
  },

  { sequelize: db, modelName: "users" }
);

Users.beforeCreate((user) => {
  const salt = brcypt.genSaltSync();
  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
