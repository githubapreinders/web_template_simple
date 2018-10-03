(function()
{
	var app;
	var Iaftag;
	var fs;
	var path;
	var _;

	init();

	/**************** DEFAULT INITIALIZATION *********************/
	function init()
	{
		var express = require('express'); // basic API builder
		var cors = require('cors');// anticipate cross browser origin requests
		var bodyParser = require('body-parser');//easy post request handling
		fs = require('fs');
		path = require('path');
		_ = require('underscore-node'); //convenience library
		app = express();
		app.use(cors());
		app.set('port', process.env.PORT || 3000);
		app.use(bodyParser.json({limit: "50mb"}));
		app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
		app.listen(app.get('port'), function ()
		{
		    console.log('\nApp listening on port\n ' + app.get('port'));
		});
	}

	/**********************  API URLS **********************************/
	app.get('/', function (req, res)
	{
		var filepath = path.join(__dirname,'./resources/landingpage.html');
		fs.readFile(filepath, {encoding :'utf-8'}, function read(err, data)
		{
			res.send(data);
		});
	});

}());



