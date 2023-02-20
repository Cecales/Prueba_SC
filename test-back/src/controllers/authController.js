const { tokenSign } = require("../middleware/generateToken");
const { dev } = require("../configs/config");

/**
 * @description Create new user
 * @param {String} email to user
 * @param {String} password to user
 */
const login = async (user, password) => {
  try {
    if (!user || user !== dev.user) {
      return { status: 404, message: "User not found!" };
    }
    if (!password || password !== dev.password) {
      return { status: 403, message: "Password and user don't match!" };
    }
    const token = await tokenSign(user);
    return { status: 200, message: "Login success!", user, token };
  } catch (error) {
    return { status: 500, message: error };
  }
};

module.exports = {
  login,
};
