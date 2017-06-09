/**
 * Created by liusuling on 2017/4/20.
 */
/**
 *如果在require命令中，这么写:
 1	var foo = require("foo.js");   //没有写./， 所以不是一个相对路径。是一个特殊的路径
 那么Node.js将该文件视为node_modules目录下的一个文件

 ● node_modules文件夹并不一定在同级目录里面，在任何直接祖先级目录中，都可以。甚至可以放到NODE_PATH环境变量的文件夹中。这样做的好处稍后你将知道：分享项目的时候，不需要带着modules一起给别人。

 ● 我们可以使用文件夹来管理模块，比如
 1	var bar = require("bar");
 那么Node.js将会去寻找node_modules目录下的bar文件夹中的index.js去执行。

 每一个模块文件夹中，推荐都写一个package.json文件，这个文件的名字不能改。node将自动读取里面的配置。有一个main项，就是入口文件：
 1	{
2	"name": "kaoladebar",
3	"version": "1.0.1",
4	"main" : "app.js"
5	}6
 package.json文件，要放到模块文件夹的根目录去。
 * */
/**
 * Created by Danny on 2015/9/20 10:28.
 */
var foo = require("foo.js");  //没有写./

console.log(foo.msg);