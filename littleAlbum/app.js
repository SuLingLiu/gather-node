var express = require("express");
var app = express();
var swig = require("swig");
var router = require("./controller"); //不写成这样的原因是require("./controller/router.js")，controller文件里有package.json有main
app.engine("html", swig.renderFile); // 运行swig模块
app.set("view engine", "html"); // 指定模板文件的后缀名为html
//app.set('views', __dirname + '/views');
// app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));
//app.use("/static", express.static("./public"));
app.use(express.static("./uploads"));

app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/up", router.doPost);

app.use(function (req, res) {
    res.render("error");
})

app.listen(3000);