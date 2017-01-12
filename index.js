
var express = require('express');
var app = express ();

var path = require('path');
var db = require('./module/db');

var formidable = require('formidable');
var ObjectId = require('mongodb').ObjectID;


//注册模板ejs
 app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//静态
app.use(express.static(path.join(__dirname, 'public')));

//路由
var router = require('./routers/routes-config');
app.use(router);


app.listen(8090);
