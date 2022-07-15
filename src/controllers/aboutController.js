//? Models
const certification = require("../models/Certifications")
const Cloud = require("../models/CV_Cloud")
const it = require("../models/CV_IT")
const languagesit = require("../models/Languages_it")
const languages = require("../models/CV_Languages")
const rh = require("../models/CV_RH")

//? Controller
exports.getAbout = (req,res,next) => {
     let sql = `SELECT DISTINCT tag FROM CV_Cloud`;
    db.query(sql, function (err, cloud) {
        if (err) throw err;
        res.render("page/about",{
            data
        })
    })
}

// //? Cloud datas
// exports.getCloud = async () => {
// 	const data = await db.query("SELECT DISTINCT tag FROM CV_Cloud")

// 	return {
// 		data
// 	}
// }

    //  public function getIt()
    // {
    //     $req = "SELECT start_date, end_date, name, location,description, type  
    //     FROM CV_IT
    //     ORDER BY id_about DESC";

    //     return $this -> queryFetchAll($req);
    // }



    // //show all pictures
    // public function getLanguagesIt()
    // {
    //     $req = "SELECT src, alt, percentage, color
    //     FROM  Languages_it
    //     ORDER BY name";
        
    //     return $this -> queryFetchAll($req);
    // }


    //  //show all pictures
    // public function getnameLanguagesIt()
    // {
    //     $req = "SELECT name
    //     FROM  Languages_it";
        
    //     return $this -> queryFetchAll($req);
    // }



    // //show all pictures
    // public function getLanguages()
    // {
    //     $req = "SELECT name,src, alt, level
    //     FROM  CV_Languages";
        
    //     return $this -> queryFetchAll($req);
    // }
    

    // public function getOld()
    // {
    //     $req = "SELECT start_date, end_date, name, location, description,type  
    //     FROM CV_RH
    //     ORDER BY end_date DESC";
        
    //     return $this -> queryFetchAll($req);
    // }


    
