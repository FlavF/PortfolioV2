const express = require("express");

//?Controller
const linkController = require("../controllers/linkController");

//? Router
const router = new express.Router();

//? Page Link
router.get("/", linkController.getLink);

module.exports = router;
