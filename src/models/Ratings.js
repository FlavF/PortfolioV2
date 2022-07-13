const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ratings', {
    id_rating: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    star_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    star_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    star_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    star_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    star_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Ratings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rating" },
        ]
      },
    ]
  });
};
