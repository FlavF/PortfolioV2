const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

// ? Models call
const Languages_it = require ("./Languages_it")
const Projects = require("./Projects")

const Projects_categories = sequelize.define('Projects_categories', {
  id_project: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects',
      key: 'id_project'
    }
  },
  id_language_it: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Languages_it',
      key: 'id_language_it'
    }
  }
}, {
  sequelize,
  tableName: 'Projects_categories',
  timestamps: false,
  indexes: [
    {
      name: "id_project",
      using: "BTREE",
      fields: [
        { name: "id_project" },
      ]
    },
    {
      name: "id_language_it",
      using: "BTREE",
      fields: [
        { name: "id_language_it" },
      ]
    },
  ]
});

Projects_categories.belongsTo(Languages_it, {
  as: "id_language_it_Languages_it",
  foreignKey: "id_language_it",
  targetKey : "id_language_it"
});

Projects_categories.belongsTo(Projects, {
	as: "id_project_Project",
	foreignKey: "id_project",
	targetKey: "id_project",
});



module.exports = Projects_categories;
