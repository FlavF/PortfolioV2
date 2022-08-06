const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const Projects = sequelize.define('Projects', {
  id_project: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  src: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  alt: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  data_base: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  data_base_alt: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, 
{
  sequelize,
  tableName: 'Projects',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id_project" },
      ]
    },
  ]
});



module.exports = Projects;
