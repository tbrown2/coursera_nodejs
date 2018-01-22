//simple js object with 2 functions
//imports our rectangle node module
var rect = require('./rectangle');

function solveRect(l,b) {
	console.log("Solving for rectangle with l = " + l +" and b = " + b);
	//passing callback function into our rectangle.js module
	//our callback function will be executed after set time out of 2 seconds
	rect(l, b , (err, rectangle) => {
		if (err) {
			console.log("Error: " + err.message)
		}
		else {
			console.log("Area: " + rectangle.area());
			console.log("Perimeter: " + rectangle.perimeter());
		}
	});
	console.log("this statement is written after solRect, but will execute before because of asynchronous.");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);