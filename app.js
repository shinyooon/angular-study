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
var cart = [];
app.get('/products/cart', function(req,res){
	res.json(cart);
});
app.post('/products/cart',function(req, res){
	var body = req.body;
	cart.push(body);
	res.json(true);
});

var secretKey = 12345;
app.get('/product/secret', function(req, res){
	secretKey = Math.floor((Math.random()*99999) + 10000);
	console.log('current secret key : ' + secretKey);
	res.json(secretKey);
});

var limitMoney = 100000;
app.post('/product/buy', function(req, res){
	var list = req.body.list,
	key = req.body.secretKey,
	sum = 0;

	if(key != secretKey){
		console.log('request key : ' + key);
		res.json("secret key가 틀렸습니다.");
	}else{
		for(var i=0;i<list;i++){
			sum += list[i].price;
		}

		res.json(sum<=limitMoney? '구매 성공' : '금액이 초과하였습니다.');
	}
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
app.listen(8080);
console.log('Express Listening on port 8080...');
