const express = require("express");

//?Controller
const projectController = require("../controllers/projectController");

//? Router
const router = new express.Router();

//? Page Link
router.get("/", projectController.getProject);

module.exports = router;
