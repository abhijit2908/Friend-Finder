var friends = require("../data/friends.js");
var path = require("path");
var bodyParser = require ('body-parser');

module.exports = function(app){
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

	app.get("/api/friends",function(req,res){
		res.json(friends);
	})

	app.post("/api/friends",function(req,res){
			var friendBody = req.body;
		friends.push(friendBody);
		//res.json(req.body);
		//console.log(JSON.stringify(req.body));
		console.log(friendBody);
		//res.json(friends);
		//res.json();

		var friendsScoreDiff = [];

			for (var i = 0; i < friends.length-1; i++) {
				var scoreDiff=0;
				for (var j = 0; j < friends[i].scores.length; j++) {
					scoreDiff += Math.abs((friends[i].scores[j])-friendBody.scores[j]);
					console.log("scoreDiff "+ scoreDiff);
				}
				friendsScoreDiff.push(scoreDiff);
				console.log("friendsScoreDiff " + friendsScoreDiff);
				}

				var bffIndex = friendsScoreDiff.indexOf((Math.min.apply(null,friendsScoreDiff)));

				var bffName = friends[bffIndex].name;
				var bffPhoto = friends[bffIndex].photo;

				console.log(bffName);
				console.log(bffPhoto);

			res.json({status:"OK",bffName:bffName,bffPhoto:bffPhoto});	


	})
}