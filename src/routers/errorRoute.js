//? Modules
const express = require("express")
//? Router
const router = new express.Router();

//? Page error / LAST PAGE (if not match before the others pages)
router.get("*", (req, res) => {
    res.render("pages/error")
})


module.exports = router;
