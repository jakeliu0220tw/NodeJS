let async = require('async');

async.series([
    function(callback) {
        // do some stuff ...
		setTimeout(function (){
			console.log('one');
			callback(null, 'one');
		}, 3000);
    },
    function(callback) {
        // do some more stuff ...
		setTimeout(function (){
			console.log('two');
			callback(null, 'two');
		}, 1000);
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
	console.log('results = ', results);
});
