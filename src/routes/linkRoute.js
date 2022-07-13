const express = require("express");

//?Controller
const linkController = require("../controllers/linkController");

//? Router
const router = new express.Router();


//? Page Link
router.get("/", linkController.getLink);


//? To add a link
router.post("/addLink", linkController.addLink)


module.exports = router;
