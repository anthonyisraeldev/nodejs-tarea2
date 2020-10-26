const express = require("express");
const router = express.Router();

const { tweetCreateValidator } = require("../validator");

router.get("/tweets",);
router.get("/tweets/followers");
router.post("/tweet/create", tweetCreateValidator);
router.delete("/tweet/:tweetId");

router.param("tweetId", tweetById);

module.exports = router;