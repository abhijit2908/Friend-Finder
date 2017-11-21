var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.text());


app.listen(PORT,function(){
	console.log("Connected to server");
});

