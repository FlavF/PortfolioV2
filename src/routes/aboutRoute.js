const express = require('express')

//?Controller
const aboutController = require("../controllers/aboutController")

//? Router
const router = express.Router()


//? Page About
app.get('/about', aboutController.getAbout)


module.exports = router



