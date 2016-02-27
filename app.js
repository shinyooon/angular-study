var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/todo', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/todo.html'));
});
app.get('/products',function(req,res){
	res.sendFile(path.join(__dirname + '/public/html/product.html'));
});

app.get('/books',function(req,res){
	res.sendFile(path.join(__dirname + '/public/html/book.html'));
});

app.get('/hello',function(req,res){
	res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

app.get('/hello/data',function(req, res){
	var items = [
		{
			title : '볼펜',
			count : 4,
			price : 1800
		},
		{
			title : '지우개',
			count : 1,
			price : 800
		}
		,{
			title : '연필',
			count : 12,
			price : 400
		}
		];
		res.json(items);
})
app.get('/money-book',function(req,res){
	res.sendFile(path.join(__dirname + '/public/html/moneybook.html'));
});
var records= [
	{date: '2016. 1. 11. 오후 8:25:39', description : '저녁식사', money :7000},
	{date: '2016. 1. 12. 오전 7:29:49', description : '아침식사', money :3800},
	{date: '2016. 1. 12. 오전 11:45:19', description : '점심식사', money :5500}
];
app.get('/money-book/data', function(req,res){
	res.json(records);
});
app.post('/money-book/data',function(req, res){
	var body = req.body;
	records.push(body);
	res.json(true);
});

app.get('/example', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/example.html'));
});

app.listen(process.env.PORT || 8080, function(){
	console.log('Express Listening on port %d in %s mode', this.address().port, app.settings.env);
});
