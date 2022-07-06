//? Models
const projectModel = require("../models/projectModel")


//? Project Controller
exports.getProject = (req, res, next) => {
	res.render("pages/project");
};

