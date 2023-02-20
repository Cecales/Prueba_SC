const jwt = require("jsonwebtoken");
const { dev } = require("../configs/config");

const tokenSign = async (user) => {
  return await jwt.sign(
    { user: user },
    dev.secret_jwt,
  );
};

const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, dev.secret_jwt);
  } catch (error) {
    return error;
  }
};

module.exports = {
  tokenSign,
  verifyToken,
};
