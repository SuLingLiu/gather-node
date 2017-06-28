/**
 * models封装的是所有关于文件的操作
 * 核心和正在在干活是model
 */
var fs = require("fs");

exports.getAllAlbums = function (callback) {
    //./是回到根目录
    fs.readdir("./uploads", function (err, files) {
        if (err) {
            callback("没有找到uploads文件", null);
            return;
        }
        var allAlbums = [];
        (function iterator(i) {
            if (i == files.length) {
                //遍历结束
                // return allAlbums;直接返回回去会报错，因为是异步的
                callback(null, allAlbums);
                return;
            }


            //files是包含文件夹名字数组，所有要拼接路径
            fs.stat("./uploads/" + files[i], function (err, stats) {
                if (err) {
                    callback("找不到文件" + files[i], null);
                    return;
                }
                if (stats.isDirectory()) {
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}

exports.getAllImagesByAlbumName = function (albumName, callback) {
    fs.readdir("./uploads/" + albumName, function (err, files) {
        if (err) {
            callback("没有找到uploads文件", null);
            return;
        }

        var allImages = [];
        (function iterator(i) {
            if (i == files.length) {
                //遍历结束
                // return allAlbums;直接返回回去会报错，因为是异步的
                callback(null, allImages);
                return;
            }

            //files是包含文件夹名字数组，所有要拼接路径
            fs.stat("./uploads/" + albumName + "/" + files[i], function (err, stats) {
                if (err) {
                    callback("找不到文件" + files[i], null);
                    return;
                }
                if (stats.isFile()) {
                    allImages.push(files[i]); //放入数组的是图片没有路径，展示不对，要想展示路径正确，需要把upload变成静态服务器即可，在app.js中配置
                }
                iterator(i + 1);
            });
        })(0);
    });
}