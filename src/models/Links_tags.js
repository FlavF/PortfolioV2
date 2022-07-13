const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Links_tags', {
    id_link_tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    link_tag: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Links_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_link_tag" },
        ]
      },
    ]
  });
};
