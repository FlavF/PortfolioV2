//? Modules
const path = require("path")
const express = require("express")
const app = express()//? Setup
const bodyParser = require("body-parser")
const cors = require ("cors")

//? Routers
const homeRouter = require("./routes/homeRoute")
const aboutRouter = require("./routes/aboutRoute")
const linkRouter = require("./routes/linkRoute");
const messageRouter = require("./routes/messageRoute");
const opinionRouter = require("./routes/opininRoute");
const photographyRouter = require("./routes/photgraphyRoute");
const projectRouter = require("./routes/projectRoute");

// ? Controllers
const errorController = require("./controllers/errorController");

//? DATABASE Setup
const db = require("./db/db")
const { url } = require("inspector")

//? Paths
const publicDirectoryPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname, "views")

//? Set views with EJS View Engine
app.set("views", viewsPath)
app.set("view engine", "ejs")

//? customize the server (CSS, JS, Images, ...)
app.use(express.static(publicDirectoryPath))

//? use the modules
app.unsubscribe(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parsing incoming 

//?Routers
app.use("/",homeRouter)
app.use("/about",aboutRouter)
app.use("/link", linkRouter);
app.use("/message", messageRouter);
app.use("/opinion", opinionRouter);
app.use("/photography", photographyRouter);
app.use("/project", projectRouter);

app.use(errorController.getError404)

 module.exports = app