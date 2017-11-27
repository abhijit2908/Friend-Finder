var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//app.use(bodyParser.text());


app.listen(PORT,function(){
	console.log("Connected to server");
});
