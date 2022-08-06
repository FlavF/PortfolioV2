//? Models
const initModels = require("../models/init-models");
const sequelize = require("sequelize")
const models = initModels(sequelize)

//? Project Controller
exports.getProject = async function (req, res, next) {
    
    const projects = await models.Projects.findAll({
        distinct: "name",
        order : [["name"]]
    })
    
    // const projectsCategories = await models.Projects_categories.findAll({
    //     distinct : Projects.name,
    //     include: Projects,
    //     Languages_it,
    // });
    
    const languagesIt = await Languages_it.findAll({
        order:[["name"]]
    })
    
    res.render("pages/project", {
        projects,
        // projectsCategories, 
        languagesIt
    });
};

