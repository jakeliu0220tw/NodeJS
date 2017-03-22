function sub(a,b){
	return a-b;
}

function sub5(a){
	return sub(a,5);
}

function fsub5(a){
	return function(){
		return sub(a,5);
	};
}

console.log("sub(8,5)=%d", sub(8,5));
console.log("fsub5(8)=%s", fsub5(8));
console.log("fsub5(8)=%d", fsub5(8)());
