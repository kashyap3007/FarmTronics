const userLogin = require("./userLogin");
const userRegister = require("./userRegister");
// const mentorLogin = require("./mentorLogin");
// const mentorRegister = require("./mentorRegister");

const authControllers = {
  userLogin,
  userRegister,
};

module.exports = authControllers;
