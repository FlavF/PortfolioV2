//? Modules
const path = require("path")
const express = require("express")
require("dotenv").config() //use to use .env

//? Routers
const homeRouter = require("./routers/homeRoute")
// const aboutRouter = require("./routers/aboutRoute")
const errorRouter = require("./routers/errorRoute")

//? Setup
const app = express()

//? Paths
const publicDirectoryPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname, "views")

//? Set views with EJS View Engine
app.set("views", viewsPath)
app.set("view engine", "ejs")
//? customize the server (CSS, JS, Images, ...)
app.use(express.static(publicDirectoryPath))

//?Routers
app.use(express.json())
app.use(homeRouter)
// app.use(aboutRouter)
app.use(errorRouter)









module.exports = app