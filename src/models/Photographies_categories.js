const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const Photographies_categories = sequelize.define('Photographies_categories', {
    id_photo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Photographies',
        key: 'id_photo'
      }
    },
    id_tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Photographies_tags',
        key: 'id_tag'
      }
    }
  }, {
    sequelize,
    tableName: 'Photographies_categories',
    timestamps: false,
    indexes: [
      {
        name: "id_photo",
        using: "BTREE",
        fields: [
          { name: "id_photo" },
        ]
      },
      {
        name: "id_tag",
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
    ]
  });

  
  module.exports = Photographies_categories;
