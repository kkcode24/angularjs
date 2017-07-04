var express = require("express");

var app = express();

//路由
app.get("/test", function (request, response) {
    //获取客户端请求的参数
    console.log(request.query.callback);

    var person = {
        name: "小明",
        gender: "男",
        age: 18
    };
    //json padding
    var json = JSON.stringify(person);
    var string = request.query.callback + "(" + json + ")";
    response.send(string);
});

app.listen(1234);
console.log("服务器已经开启!");


