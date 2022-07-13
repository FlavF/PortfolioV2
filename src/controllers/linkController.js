//? Models
const Links = require("../models/Links");
const LinksTags = require("../models/Links_tags");

//? Link Controller
//? get the page link
exports.getLink = async function (req, res, next) {
	// const links = await Links.findAll();
	// const tags = await LinksTags.findAll();
	res.render("pages/link")
	//, {
	// 	links,
	// 	tags,
	// });
}

//? To add a link
exports.addLink = async function(req, res, next) {
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
		.then((result) => console.log("add Link"))
		.catch((err) => console.log(err));
};







//     //show links list
//     public function getLinks()
//     {
//         $req = "SELECT DISTINCT link, url, title, id_link_tag as id_tag, level
//         FROM  Links
//         ORDER By id_tag";

//         return $this -> queryFetchAll($req);
//     }

//     //Show links & tags
//     public function getLinksTags()
//     {
//         $req = "SELECT DISTINCT Links_tags.link_tag as tag,Links.link as link, Links.url as url, Links.title as title, Links_tags.id_link_tag as id_tag, Links.level as level
//         FROM Links_tags 
//         INNER JOIN Links 
//         ORDER By id_tag";

//         return $this -> queryFetchAll($req);
//     }


//     //show links list
//     public function getTags()
//     {
//         $req = "SELECT id_link_tag as id_tag, link_tag as tag
//         FROM  Links_tags
//         ORDER BY tag";

//         return $this -> queryFetchAll($req);
//     }


