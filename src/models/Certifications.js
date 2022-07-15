const { DataTypes } = require("sequelize");

const sequelize = require("../db/db");

const Certifications =  sequelize.define(
		"Certifications",
		{
			id_certification: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			date: {
				type: DataTypes.DATE(4),
				allowNull: false,
			},
			src: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			alt: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "Certifications",
			timestamps: false,
			indexes: [
				{
					name: "PRIMARY",
					unique: true,
					using: "BTREE",
					fields: [{ name: "id_certification" }],
				},
			],
		}
	);



module.exports = Certifications;