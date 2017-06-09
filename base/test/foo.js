/**
 * Created by liusuling on 2017/4/20.
 */
var msg = "你好";
var info = "呵呵";

function showInfo(){
    console.log(info);
}

exports.msg = msg;//exports.msg = msg;..
exports.info = info;
exports.showInfo = showInfo;