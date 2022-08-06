//?Models
const { isRegExp } = require("util/types");
const Ratings = require("../models/Ratings");
// var newIp_address = request.header('x-forwarded-for') || request.connection.remoteAddress;
var newIp_address = "127.0.0.1"

//? Opinion Controller
exports.getOpinion = async function(req, res, next) {
	
	//? charge page with datas given from model
	res.render("pages/opinion", {
		sumStar1: getStarts.sumStar1,
		sumStar2: getStarts.sumStar2,
		sumStar3: getStarts.sumStar3,
		sumStar4: getStarts.sumStar4,
		sumStar5: getStarts.sumStar5,
		starAverage,
		starNb,
		message: getMessage(),
	});
	
	//? Get the datas from Ratings
	const getStarts = Ratings.findAll({
		attributes: {
			include: [
				[sequelize.fn("COUNT", sequelize.col("star_1")), "sumStar1"],
				[sequelize.fn("COUNT", sequelize.col("star_2")), "sumStar2"],
				[sequelize.fn("COUNT", sequelize.col("star_3")), "sumStar3"],
				[sequelize.fn("COUNT", sequelize.col("star_4")), "sumStar4"],
				[sequelize.fn("COUNT", sequelize.col("star_5")), "sumStar5"],
				[sequelize.fn("COUNT", sequelize.col("value")), "starsValues"],
			],
		},
	}); //* show as instance.sumStar1
	
	//? Calculus
	const starsNb =
	getStarts.sumStar1 +
	getStarts.sumStar2 +
	getStarts.sumStar3 +
	getStarts.sumStar4 +
	getStarts.sumStar5;
	
	//? average of the note given by people
	const starAverage = getStarts.starsValues / starsNb;
	
	//? Get Ip address of the visitor
	const getIp = Rating.finAll({
		attributes: ["ip_address"],
		where: {
			ip_address: newIp_address,
		},
	});
	
	
	//? Found if Ip is already in database
	function getMessage(){
		let message;
		if (getIp.lenght > 0) {
			return message = "Vous avez déjà voté. Merci pour votre vote.";
		} 
		return message = "Vous pouvez voter.";
		
	}
	
}


//* When you add a new opinion (choosing your star)
exports.addStars = async function(req, res, next) {
	const star_1 = req.body.star_1
	const star_2 = req.body.star_2;
	const star_3 = req.body.star_3;
	const star_4 = req.body.star_4;
	const star_5 = req.body.star_5;
	const value = req.body.value;
	
	//? add new rating
	await Ratings.create({
		star_1,
		star_2,
		star_3,
		star_4,
		star_5,
		value,
		ip_address,
	})
	.then((result) => {
		console.log(result);
		res.redirect("/opinion");
	})
	.catch((err) => console.log(err));
}

