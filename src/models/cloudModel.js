//? database
const db = require("../db/db");

//? Cloud datas

async function getCloud() {
	const data = await db.query("SELECT DISTINCT tag FROM CV_Cloud")

	return {
		data
	}
}

module.exports = {
	getCloud
}