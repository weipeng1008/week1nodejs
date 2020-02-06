var fs = require('fs');
console.log("Begin Reading File");
var data = fs.readFileSync('input2.txt');
console.log(data.toString());
console.log("End Reading File")

console.log("Begin Appending File");
var data = fs.appendFileSync('input2.txt', 'append something');
console.log("End Appending File")

console.log("Begin Re-reading File");
var data2 = fs.readFileSync('input2.txt');
console.log(data2.toString());
console.log("End Re-reading File");


var fs = require('fs');

console.log("Begin reading file");
fs.readFile("input2.txt", function(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish reading file");
	console.log("Begin appending file");
	fs.appendFile("input2.txt","I am appending something", (err)=>{
		if (err) return err;
		console.log("Finish appending file");
		console.log("Begin re-reading file");
		fs.readFile("input2.txt", (err,data2) => {
			if (err) return err;
			console.log(data2.toString());
			console.log("Finish re-reading file")
		})
	})
})