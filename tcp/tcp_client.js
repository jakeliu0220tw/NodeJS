var net = require('net');

var client = new net.Socket();

//socket.connect(port, host, connectListener())
client.connect(8001, '127.0.0.1', function(err) {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('error', function(data) {
	console.log('error happen on connection');	
	console.log('error = ', data);
});

client.on('close', function() {
	console.log('Connection closed');
});

