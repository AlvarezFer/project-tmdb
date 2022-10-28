const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, process.env.SECRET, {
    expiresIn: "10d",
  });

  return token;
};

const validateToken = () => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
