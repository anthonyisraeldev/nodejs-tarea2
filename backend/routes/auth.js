const express = require("express");
const router = express.Router();

const { userLoginValidator, userSignupValidator } = require("../validator");

router.post("/auth/signup", userSignupValidator);
router.post("/auth/login", userLoginValidator);

module.exports = router;