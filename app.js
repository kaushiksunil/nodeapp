var express = require('express');
var mysql = require('mysql');
var bodyParseer = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port);



var connection = mysql.createConnection({
   host:'',
   user:'root',
   pass:'',
   database:'my_portfolio'  
});

connection.connect((err)=> {
    if(err) throw err;
	console.log("Database connected");
});