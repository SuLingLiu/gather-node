//这个案例简单讲解http模块
//引用模块
var http = require("http");

//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
	//req参数表示接收到客户的请求，res表示服务器对客户做出的响应
	console.log("服务器接收到了请求" + req.url);
	//设置头部，必需的设置，根据此设置来展示是何种类型的文件
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});//也可以用res.setHeader，只是用法不一样

	res.write("<h1>我是主标题</h1>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h3>我是3标题</h3>");

	/*回调里其他的都可以不写，但是必需要写res.end(),这个方法告诉服务器，所有的响应头和响应体已经发送；
	服务器可以认为消息结束。response.end() 方法必须在每个响应中调用。如果指定了参数 data，将会在响应流结束的时候调用，数据显示在页面中。
	如果不写这个，浏览器访问的时候标题处会一直在旋转，等待
	*/

    //writeHead、write、end里必需是字符串
	res.end((1+2+3).toString());

});

//监听端口
server.listen(3000,"127.0.0.1");