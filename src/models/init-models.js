//? Models
var CV_Cloud = require("./CV_Cloud");
var CV_IT = require("./CV_IT");
var CV_Languages = require("./CV_Languages");
var CV_RH = require("./CV_RH");
var Certifications = require("./Certifications");
var Languages_it = require("./Languages_it");
var Links = require("./Links");
var Links_tags = require("./Links_tags");
var Photographies = require("./Photographies");
var Photographies_categories = require("./Photographies_categories");
var Photographies_tags = require("./Photographies_tags");
var Projects = require("./Projects");
var Projects_categories = require("./Projects_categories");
var Ratings = require("./Ratings");

function initModels(sequelize) {
  Projects_categories.belongsTo(Languages_it, { as: "id_language_it_Languages_it", foreignKey: "id_language_it"});
  Languages_it.hasMany(Projects_categories, { as: "Projects_categories", foreignKey: "id_language_it"});
  Links.belongsTo(Links_tags, { as: "id_link_tag_Links_tag", foreignKey: "id_link_tag"});
  Links_tags.hasMany(Links, { as: "Links", foreignKey: "id_link_tag"});
  Photographies_categories.belongsTo(Photographies, { as: "id_photo_Photography", foreignKey: "id_photo"});
  Photographies.hasMany(Photographies_categories, { as: "Photographies_categories", foreignKey: "id_photo"});
  Photographies_categories.belongsTo(Photographies_tags, { as: "id_tag_Photographies_tag", foreignKey: "id_tag"});
  Photographies_tags.hasMany(Photographies_categories, { as: "Photographies_categories", foreignKey: "id_tag"});
  Projects_categories.belongsTo(Projects, { as: "id_project_Project", foreignKey: "id_project"});
  Projects.hasMany(Projects_categories, { as: "Projects_categories", foreignKey: "id_project"});
  
  return {
    CV_Cloud,
    CV_IT,
    CV_Languages,
    CV_RH,
    Certifications,
    Languages_it,
    Links,
    Links_tags,
    Photographies,
    Photographies_categories,
    Photographies_tags,
    Projects,
    Projects_categories,
    Ratings,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
