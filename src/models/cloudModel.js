//? Cloud datas
exports.getCloud = async () => {
	const data = await db.query("SELECT DISTINCT tag FROM CV_Cloud")

	return {
		data
	}
}

