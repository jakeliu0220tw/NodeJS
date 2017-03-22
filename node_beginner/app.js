//app.js

var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>node.js</h1>');
    res.end('<p>hello world</p>');
}).listen(3388);

console.log('http server is listening at port 3388');