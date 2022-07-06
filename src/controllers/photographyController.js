//? Models
const photographyModel = require("../models/photographiesModel")


//? Photography Controller
exports.getPhotography = (req, res, next) => {
	res.render("pages/photography");
};

