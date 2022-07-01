//? Modules
const express = require("express")
//? Router
const router = new express.Router()
//? Structure of fields
// const cloudModel = require("../models/cloudModel")

const clouds = {
		id: 1,
		tag : "word"	
}


//? Page About
router.post("/about", async function (req, res, next) {
	try {
		res.render("pages/about", {
			title: "Flavia",
			clouds,
			// clouds: cloudModel.getCloud(),
			// 	// picturesIt,
			// 	// certifications,
			// 	// languagesIt,
			// 	// languages,
			// 	// oldJobs,
		});
	} catch (err) {
		if (err) throw err;
	}
	
});



module.exports = router


