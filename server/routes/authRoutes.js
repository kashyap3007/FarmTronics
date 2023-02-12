const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth/authControllers.js");

router.post("/user/register", authControllers.userRegister);
router.post("/user/login", authControllers.userLogin);
// router.post("/mentor/register", authControllers.mentorRegister);
// router.post("/mentor/login", authControllers.mentorLogin);

module.exports = router;
