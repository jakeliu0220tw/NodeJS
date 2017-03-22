var WebSocket = require('ws');

var wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
  console.log('establish connection');

  ws.on('message', function incoming(message) {
    console.log('rcv -> %s', message);

    console.log('send -> something');
    ws.send('something');
  });
});
