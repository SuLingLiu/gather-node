var http = require("http");

var server = http.createServer(function(req,res){
	console.log(req.url);//地址栏里输入http://127.0.0.1:3000/aa/bb?id=1#b=1，打印的结果是/aa/bb?id=1
	res.end('hello');
});

server.listen(3000,"127.0.0.1");