//? Models
const Links = require("../models/Links");
const LinksTags = require("../models/Links_tags");
const sequelize = require("sequelize")

//? Link Controller
//? get the page link
exports.getLink = async function (req, res, next) {
	

	const tags = await LinksTags.findAll({
		distinct: "link_tag",
		order: [["link_tag"]],
	});

	const links = await Links.findAll({
		where: {
			level: 1,
		},
		order: [["id_link_tag"], ["link"]],
	});
		//*charge the page ejs link and the datas given
		res.render("pages/link", {
			tags,
			links
		});
	};
	
	//? To add a link
	exports.addLink = async function (req, res, next) {
		const idTag = req.body.id_tag;
		const link = req.body.link;
		const url = req.body.url;
		const title = req.body.title;
		
		await Links.create({
			link,
			url,
			title,
			id_link_tag: idTag,
		})
		.then((result) => {
			console.log(result);
			res.redirect("/link");
		})
		.catch((err) => console.log(err));
	};
	