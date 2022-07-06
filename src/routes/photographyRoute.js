const express = require("express");

//?Controller
const photographyController = require("../controllers/photographyController");

//? Router
const router = new express.Router();

//? Page Link
router.get("/", photographyController.getPhotography);

module.exports = router;
