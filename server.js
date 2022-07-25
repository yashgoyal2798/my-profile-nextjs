var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');         // Used to parse incoming messages
var port = process.env.port;

var app = express(function(req, res){
    username = req.headers['x-iisnode-auth_user'];
});

app.use(express.static(__dirname + "/ApplicationNameOnIIS/"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// Start listening on server port
app.listen(process.env.PORT);

app.get('/ApplicationNameOnIIS/', function(req, res) {
    res.sendfile(__dirname + '/index.html');    
});
