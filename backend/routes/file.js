const express = require("express");
const router = express.Router();

router.post("/file/avatar/apload");
router.post("/file/banner/apload");
router.get("/file/avatar");
router.get("/file/banner");

module.exports = router;