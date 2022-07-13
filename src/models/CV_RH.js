const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CV_RH', {
    id_about: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATE(4),
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE(4),
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "job title or training title"
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "school name or company name"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(132),
      allowNull: false,
      comment: "training or job"
    }
  }, {
    sequelize,
    tableName: 'CV_RH',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_about" },
        ]
      },
    ]
  });
};
