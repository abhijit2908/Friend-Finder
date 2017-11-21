var friends = require("../data/friends.js");
var path = require("path");
var bodyParser = require ('body-parser');

module.exports = function(app){
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

	app.get("/api/friends",function(req,res){
		res.json(friends);
	})

	app.post("/api/friends",function(req,res){
			//var friendBody = req.body;
		friends.push(req.body);
		//res.json(req.body);
		//console.log(JSON.stringify(req.body));
		console.log(req.body);
		res.json(true);
		//res.json();


	})
}