//? Module
const app = require("./app");
const sequelize = require("sequelize")

//? Datas
const port = process.env.PORT;

//? Create table and relations
// sequelize
// 	.sync({ force: true })
// 	.then((result) => {
// 		console.log(result);
// 		app.listen(port, () =>
// 			console.log(`Server started, listening port: ${port}`)
// 		);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//?Server
app.listen(port, () => console.log(`Server started, listening port: ${port}`));
