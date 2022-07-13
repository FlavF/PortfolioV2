const express = require("express")

//?Controller
// const messageController = require("../controllers/messsageController")
const homeController = require("../controllers/homeController")

//? Router
const router = new express.Router();


//? Page Homepage
router.get("/", homeController.getHome);

// router.get("/", messageController.getMessage);

module.exports = router;
