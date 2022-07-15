//? Models
const Projects = require("../models/Projects");
const Projects_categories = require("../models/Projects_categories");
const Languages_it = require("../models/Languages_it")


//? Project Controller
exports.getProject = async function (req, res, next) {
    
    const projects = await Projects.findAll({
        distinct: "name",
        order : [["name"]]
    })
    
    const projectsCategories = await Projects_categories.findAll({
        distinct : Projects.name,
        include: Projects,
        Languages_it,
    });
    
    const languagesIt = await Languages_it.findAll({
        order:[[Languages_it.name]]
    })
    
    res.render("pages/project", {
        projects,
        projectsCategories, 
        languagesIt
    });
};

