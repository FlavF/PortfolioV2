const express = require("express")

//?Controller
const messageController = require("../controllers/messsageController")

//? Router
const router = new express.Router();


//? Page Homepage
router.get("/", messageController.getMessage);


module.exports = router;
