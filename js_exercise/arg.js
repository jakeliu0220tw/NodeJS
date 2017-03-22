function print(){
	for(var i in arguments){
		console.log(i, "=>", arguments[i]);
	}
}

print(3, 1.222, "hello");
