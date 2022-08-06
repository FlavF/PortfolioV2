//? Models
const Links = require("../models/Links");
const LinksTags = require("../models/Links_tags");

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
	
	//TODO add a message when the link is added
	//? To add a link
	exports.addLink = async function (req, res, next) {

		const newLink = {
			link:req.body.link ,
			url: req.body.url,
			title:req.body.title ,
			id_link_tag: req.body.id_tag,
		};
			
		await Links.create(newLink)
		.then((result) => {
			console.log(result);
			// res.redirect("/link");
			res.render("/link", {message : "Merci d'avoir ajouter un nouveau lien."})
		})
		.catch((err) => console.log(err));
	};
	