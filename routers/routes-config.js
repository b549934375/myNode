var express = require('express');
var app = express();

var mock = require('./mock/index');
var message = require('./message/msg');
var database = require('./database/index');

app.use('/mock', mock);  //mock假数据
app.use('/msg', message);  //留言板demo
app.use('/db', database);   //操作数据库的一些方法


module.exports = app;
