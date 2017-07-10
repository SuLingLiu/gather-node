var http = require('http');
var server = http.createServer();

server.once('request', function (req, res) {
	if (req.url !== "/favicon.ico") console.log('11')
})

server.on('request', function (req, res) {
	if (req.url !== "/favicon.ico") console.log('222')
	res.end();
})

server.once('request', function (req, res) {
	if (req.url !== "/favicon.ico") console.log('333')
})

server.listen(3000, '127.0.0.1')