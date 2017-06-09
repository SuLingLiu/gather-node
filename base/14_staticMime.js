var http = require("http");
var url = require('url');
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res) {

	var pathname = url.parse(req.url).pathname;

	if(pathname == '/') {
		pathname = "index.html";
	}

	var extname = path.extname(pathname);

	fs.readFile("./static/" + pathname,function(err,data) {
		if(err) {
			fs.readFile("./static/404.html",function(err,data) {
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			})

			return;
		}

		//配置mime类型，读取json数据
		fs.readFile("./mime.json",function(err,json) {
			json = JSON.parse(json);

			//必需用中括号，因为extname是变量
			var mime = json[extname];

			res.writeHead(200,{"Content-type":mime});
			res.end(data);
		})
	})

}).listen(3000,"127.0.0.1");


