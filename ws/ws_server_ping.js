var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8080});
wss.on('connection', function (ws) {
	console.log('websocket session connected');
	
	var id = setInterval(function () {
		//ws.send(JSON.stringify(process.memoryUsage()), function () { /* ignore errors */ });
		console.log('send ping');
		ws.send('ping');
	}, 3000);

	ws.on('message', function (msg) {
		console.log('rceive msg: %s', msg);
	});
	
	ws.on('close', function () {
		console.log('websocket session closed');
		clearInterval(id);
	});

});
