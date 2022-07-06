const express = require("express");

//?Controller
const opinionController = require("../controllers/opinionController");

//? Router
const router = new express.Router();

//? Page Link
router.get("/", opinionController.getOpinion);


//? To add Stars
router.get("/addStars", opinionController.addStars);

module.exports = router;
