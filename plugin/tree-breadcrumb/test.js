var breadcrumb = require('./breadcrumb');
var data = require('./data');
var express = require("express");
var app = express(); 

var _breadcrumb = new breadcrumb();
var breadcrumbNode = _breadcrumb.init(data,11);


app.use(express.static(__dirname));

app.get("/",function (req,res) {
    res.send(breadcrumbNode);
});

var server = app.listen('7083',function () {
    console.log("run http://localhost:7083")
})