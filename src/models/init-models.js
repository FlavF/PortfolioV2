var DataTypes = require("sequelize").DataTypes;
var _CV_Cloud = require("./CV_Cloud");
var _CV_IT = require("./CV_IT");
var _CV_Languages = require("./CV_Languages");
var _CV_RH = require("./CV_RH");
var _Certifications = require("./Certifications");
var _Languages_it = require("./Languages_it");
var _Links = require("./Links");
var _Links_tags = require("./Links_tags");
var _Photographies = require("./Photographies");
var _Photographies_categories = require("./Photographies_categories");
var _Photographies_tags = require("./Photographies_tags");
var _Projects = require("./Projects");
var _Projects_categories = require("./Projects_categories");
var _Ratings = require("./Ratings");

function initModels(sequelize) {
  var CV_Cloud = _CV_Cloud(sequelize, DataTypes);
  var CV_IT = _CV_IT(sequelize, DataTypes);
  var CV_Languages = _CV_Languages(sequelize, DataTypes);
  var CV_RH = _CV_RH(sequelize, DataTypes);
  var Certifications = _Certifications(sequelize, DataTypes);
  var Languages_it = _Languages_it(sequelize, DataTypes);
  var Links = _Links(sequelize, DataTypes);
  var Links_tags = _Links_tags(sequelize, DataTypes);
  var Photographies = _Photographies(sequelize, DataTypes);
  var Photographies_categories = _Photographies_categories(sequelize, DataTypes);
  var Photographies_tags = _Photographies_tags(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var Projects_categories = _Projects_categories(sequelize, DataTypes);
  var Ratings = _Ratings(sequelize, DataTypes);

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
