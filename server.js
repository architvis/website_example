var express = require('express');
//var bodyParser = require('body-parser');
//var path = require("path");

var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/pages/index.html");
});

app.get('/page2', function(req,res){
    res.sendFile(__dirname + "/public/pages/page2.html");
});

app.listen(3000, ()=>console.log('Note taking app is running on port 3000'));
