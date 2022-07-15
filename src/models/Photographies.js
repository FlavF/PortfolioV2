const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const Photographies = sequelize.define('Photographies', {
    id_photo: {
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
    visual: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "Horizontal"
    }
  }, {
    sequelize,
    tableName: 'Photographies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_photo" },
        ]
      },
    ]
  });

  
  module.exports = Photographies;
