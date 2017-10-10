var express          = require('express');
var ejs              = require('ejs');
var app              = express();
var server           = require('http').createServer(app);
var router    = require('./routes/app.js');

var ip = "127.0.0.1";
var port = 8880;

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', router);

server.listen(port, ip, function() {
	console.log("Listenning to IP: " + ip + ", Port: " + port);
});