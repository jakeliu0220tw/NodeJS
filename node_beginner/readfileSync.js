//readfileSync.js

var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log('data = ', data);
console.log('end');
