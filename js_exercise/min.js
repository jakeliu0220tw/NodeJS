function min(){
	var m = arguments[0];
	for (var i in arguments){
		if (arguments[i] < m)
			m = arguments[i];
	}
	
	return m;
}

var x = min(7,6,5,4,3,2,1);
console.log("x=%d", x);