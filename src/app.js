//? Modules
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require ("cors")
const ejsLint = require("ejs-lint");

//? DATABASE Setup
const sequelize = require("./db/db")

//? Setup
const app = express()    

// ? Controllers
const errorController = require("./controllers/errorController");

//? Routers
const homeRouter = require("./routes/homeRoute")
// const aboutRouter = require("./routes/aboutRoute")
const linkRouter = require("./routes/linkRoute");
// const messageRouter = require("./routes/messageRoute");
const opinionRouter = require("./routes/opinionRoute");
// const photographyRouter = require("./routes/photgraphyRoute");
//const projectRouter = require("./routes/projectRoute");

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
// app.use("/about",aboutRouter)
app.use("/link", linkRouter);
// app.use("/message", messageRouter);
app.use("/opinion", opinionRouter);
// app.use("/photography", photographyRouter);
// app.use("/project", projectRouter);

app.use(errorController.getError404)




module.exports = app