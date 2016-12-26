var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

var books = [
	{
		title: 'AngularJS'
	},
	{
		title: 'EmberJS'
	},
	{
		title: 'ReactJS'
	}
];

app.get('/books', function(req, res){
	res.send(books);
});

app.post('/books', function(req, res){
	books.push({
		title: req.body.title
	});

	res.send(200);

});

var server = app.listen(3001, function(){
	console.log('backend started');
});