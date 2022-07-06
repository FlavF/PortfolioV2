//?Models
const ratingModel = require("../models/ratingModel")


//? Opinion Controller
exports.getOpinion = (req, res, next) => {
	res.render("pages/opinion");
};


exports.addStars = (req, res, next) => {
	//TODO SQL 
	res.redirect("/")
};