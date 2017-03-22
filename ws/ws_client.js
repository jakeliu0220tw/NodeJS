var WebSocket = require('ws');
// var ws = new WebSocket('ws://localhost:8080/websockets/');
var ws = new WebSocket('ws://localhost:8080/');
ws.on('open', function() {
	
    ws.send('Msg from client');
});

ws.on('message', function(data, flags) {
    console.log('Msg received in client: %s ', data);
});
