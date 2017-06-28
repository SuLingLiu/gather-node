var file = require("../models/file.js");
var formidable = require("formidable"); //上传包
var path = require("path");
var fs = require("fs");
var sd = require("silly-datetime"); //日期插件

exports.showIndex = function (req, res, next) {
	//错误的：传统思维，不是node的思维：
	// res.render("index", {
	// 	"albums": file.getAllAlbums()
	// })

	//这就是Node.js的编程思维，就是所有的东西，都是异步的
	//所以，内层函数，不是return回来东西，而是调用高层函数提供的
	//回调函数。把数据当做回调函数的参数来使用。
	file.getAllAlbums(function (err, allAlbums) {
		//err是字符串
		if (err) {
			next(); //交给下面适合他的中间件
			return;
		}
		res.render("index", {
			"albums": allAlbums
		})
	});
}

//相册页
exports.showAlbum = function (req, res, next) {
	//遍历相册中的所有图片
	var albumName = req.params.albumName;
	//具体业务交给model
	file.getAllImagesByAlbumName(albumName, function (err, imagesArray) {
		//err是字符串
		if (err) {
			next(); //交给下面适合他的中间件
			return;
		}
		res.render("album", {
			"albumName": albumName,
			"images": imagesArray
		})
	})

}

exports.showUp = function (req, res, next) {

	file.getAllAlbums(function (err, allAlbums) {
		//err是字符串
		if (err) {
			next(); //交给下面适合他的中间件
			return;
		}
		res.render("up", {
			"albums": allAlbums
		})
	});
}

exports.doPost = function (req, res, next) {
	var form = new formidable.IncomingForm();
	//form.uploadDir = __dirname + "../temup/"; //存放图片的路径，必须先写，但是fields在下面获取到的，所以可以先把图片放到一个临时的中转站里
	//'D:\liusuling\node\littleAlbum\controller..\temup\ upload_964cf3f1c7fdb88cd32487f0fa4068e3 '
	form.uploadDir = path.normalize(__dirname + "/../temup/");
	form.parse(req, function (err, fields, files, next) {
		//判断文件尺寸,有两种一是服务器，而是浏览器，读浏览器的api，有些浏览器不支持
		console.log(fields);
		console.log(files);
		if (err) {
			next(); //这个中间件不受理这个请求了，往下走
			return;
		}
		//判断文件尺寸
		var size = parseInt(files.uploadImg.size);
		var oneMb = 1024 * 1024;
		if (size > oneMb) {
			res.send("图片尺寸应该小于1M");
			//删除图片
			fs.unlink(files.uploadImg.path);
			return;
		}

		//改名
		var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
		var ran = parseInt(Math.random() * 89999 + 10000);
		var extname = path.extname(files.uploadImg.name); //返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'，如果无扩展名 又 不以'.'结尾，将返回空值
		var fileName = fields.fileName;
		var oldpath = files.uploadImg.path;
		var newpath = path.normalize(__dirname + "/../uploads/" + fileName + "/" + ttt + ran + extname);

		fs.rename(oldpath, newpath, function (err) {
			if (err) {
				res.send("改名失败");
				return;
			}
			res.send("成功");
		});
		// fs.rename(oldPath, newPath, function (err) {
		// 	if (err) {
		// 		res.send("改名失败");
		// 		return;
		// 	}
		// 	res.send("成功");
		// })
	});

	return;
}