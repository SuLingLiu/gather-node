var express = require('express');
var app = express();
const swig = require('swig');
//socket.io公式：
var http = require('http').Server(app);
var io = require('socket.io')(http);

//模板引擎
app.engine("html",swig.renderFile);
app.set("view engine","html");
//静态服务
app.use(express.static("./public"));


//中间件
//显示首页
app.get("/",function(req,res,next){
	res.render("index");
});

io.on("connection",function(socket){
	socket.on("liaotian",function(msg){
		//把接收到的msg原样广播 
		io.emit("liaotian",msg);
	});
});

//监听
http.listen(3000);