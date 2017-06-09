/**
 * Created by Danny on 2015/9/20 10:28.
 */

var People = require("./test/People.js");
var xiaoming = new People("小明","男","12");
xiaoming.sayHello();
/**
 也就是说，js文件和js文件之间有两种合作的模式：
 1） 某一个js文件中，提供了函数，供别人使用。 只需要暴露函数就行了； exports.msg=msg;
 2） 某一个js文件，描述了一个类。   module.exports = People;

 * */