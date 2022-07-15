const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const CV_languages = sequelize.define('CV_Languages', {
  id_language: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  src: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  alt: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  level: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'CV_Languages',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id_language" },
      ]
    },
  ]
});


module.exports = CV_languages;
