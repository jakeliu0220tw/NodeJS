var dict = { name: "john", age: 30};

dict["email"] = "john@gmail.com";
dict.tel = "9487";

console.log('"key" => "value"');
for(key in dict){
	console.log("%s => %s", key, dict[key]);
}

console.log("age=", dict["age"]);
console.log("birthday=", dict.birthday);