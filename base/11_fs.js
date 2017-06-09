var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//存储所有的文件夹
	var wenjianjia = [];
	//stat检测状态,readdir读取一个文件夹所有文件
	fs.readdir("./album",function(err,files){
		//files是个文件名的数组，并不是文件的数组，表示./album这个文件夹中的所有东西
		//包括文件、文件夹
		for(var i = 0 ; i < files.length ;i++){
			var thefilename = files[i];
			//又要进行一次检测
			fs.stat("./album/" + thefilename , function(err,stats){
				//如果他是一个文件夹，那么输出它：
				if(stats.isDirectory()){
					wenjianjia.push(thefilename);
				}
				console.log(wenjianjia);
			});

			//这样有一个弊端，就是for循环很快就执行完了，但是fs.stat的回调并不是一下就完事的是一个异步调用
		}
	});
});

server.listen(3000,"127.0.0.1");