var a=[1,6,2,5,3,6,1];

for(i in a){
	console.log("a[%d]=%d",i,a[i]);
}

var aa=[1,2,3];
var bb=[3,2,1];

for(i in aa){
	sum=aa[i]+bb[i];
	console.log("sum[%d]=%d",i,sum);
}