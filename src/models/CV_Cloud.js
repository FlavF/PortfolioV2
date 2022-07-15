const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const CV_Cloud = sequelize.define(
	"CV_Cloud",
	{
		id_cloud: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		tag: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "CV_Cloud",
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "id_cloud" }],
			},
		],
	}
);

module.exports = CV_Cloud;