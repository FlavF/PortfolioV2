const {DataTypes} = require('sequelize');

const sequelize = require("../db/db")

const Links = sequelize.define('Links', {
    id_link: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_link_tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Links_tags',
        key: 'id_link_tag'
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Links',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_link" },
        ]
      },
      {
        name: "id_link_tag",
        using: "BTREE",
        fields: [
          { name: "id_link_tag" },
        ]
      },
    ]
  });


module.exports = Links