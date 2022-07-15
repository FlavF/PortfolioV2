const express = require("express")

//?Controller
const homeController = require("../controllers/homeController")

//? Router
const router = new express.Router();


//? Page Homepage
router.get("/", homeController.getHome);


module.exports = router;
