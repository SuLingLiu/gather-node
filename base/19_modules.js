/**
 * Created by liusuling on 2017/4/20.
 */
var sd = require("silly-datetime");

//需要使用一个日期时间，格式为 20150920110632
var ttt = sd.format(new Date(), 'YYYYMMDDHHmm');
console.log(ttt);
console.log(__dirname)

/**
 模块就是一些功能的封装，所以一些成熟的、经常使用的功能，都有人封装成为了模块。并且放到了社区中，供人免费下载。
 这个伟大的社区，叫做npm。 也是一个工具名字  node package management
 https://www.npmjs.com/

 去社区搜索需求，然后点进去，看api。
 如果要配置一个模块，那么直接在cmd使用
 1	npm install 模块名字
 就可以安装。 模块名字全球唯一。
 安装的时候，要注意，命令提示符的所在位置。


 1.我们的依赖包，可能在随时更新，我们永远想保持更新，或者某持某一个版本；
 2.项目越来越大的时候，给别人看的时候，没有必要再次共享我们引用的第三方模块。

 我们可以用package.json来管理依赖。
 在cmd中，使用npm init可以初始化一个package.json文件，用回答问题的方式生成一个新的package.json文件。
 使用
 1	npm install
 将能安装所有依赖。
 npm也有文档，这是package.json的介绍：
 https://docs.npmjs.com/files/package.json

 require()别的js文件的时候，将执行那个js文件。

 注意：
 require()中的路径，是从当前这个js文件出发，找到别人。而fs是从命令提示符找到别人。
 所以，桌面上有一个a.js， test文件夹中有b.js、c.js、1.txt
 a要引用b：
 1	var b = require(“./test/b.js”);
 b要引用c：
 1	var b = require(“./c.js”);

 但是，fs等其他的模块用到路径的时候，都是相对于cmd命令光标所在位置。
 所以，在b.js中想读1.txt文件，推荐用绝对路径：
 1	fs.readFile(__dirname + "/1.txt",function(err,data){
2		if(err) { throw err; }
3		console.log(data.toString());
4	});


 * */