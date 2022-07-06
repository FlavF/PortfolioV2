//? Models
const linkModel = require("../models/linkModel")

//? Link Controller

//? get the page link
exports.getLink = (req, res, next) => {
	res.render("pages/link");
};

//? To add a link
exports.addLink = (req, res, next) => {
	//TODO SQL to add link
	res.redirect("/")
};

