var express = require ('express');
var path = require ('path');
var bodyparser = require ('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(PORT,function(){
	console.log("Connected to server");
});

