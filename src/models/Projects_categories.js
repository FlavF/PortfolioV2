const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

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

  module.exports = Projects_categories;
