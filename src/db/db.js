const mysql = require("mysql");
require("dotenv").config() //use to use .env

// db = mysql.createConnection({
db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// ? to check the connection
db.connect(function (err) {
	if (err) throw err;
	console.log("Database is connected successfully !");

});

//? Functions to execute CRUD
//? GET
//* To execute function MySQL
// async function query(sql, params) {
// 	const [rows, fields] = await pool.execute(sql, params)
// 	return rows
// }

module.exports = db
