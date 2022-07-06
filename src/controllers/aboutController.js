//? Models
const certificationsModel = require("../models/certificationsModel")
const CloudModel = require("../models/cloudModel")
const itModel = require("../models/itModel")
const languagesitModel = require("../models/languagesitModel")
const languagesModel = require("../models/languagesModel")
const rhModel = require("../models/rhModel")

exports.getAbout = (req,res,next)=>{
     let sql = `SELECT DISTINCT tag FROM CV_Cloud`;
    db.query(sql, function (err, cloud) {
        if (err) throw err;
        res.render("page/about",{
            data
        })
    })
}

