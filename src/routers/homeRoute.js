//? Modules
const express = require("express")
//? Router
const router = new express.Router();


//? Page Homepage
router.get("/", function (req, res) {
	res.render("pages/home");
});


module.exports = router;
