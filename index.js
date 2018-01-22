//simple js object with 2 functions
//imports our rectangle node module
var rect = require('./rectangle');

function solveRect(l,b) {
	if (l <= 0 || b <= 0) {
      console.log("Rectangle dimensions should be greater than zero:  l = " + l + ",  and b = " + b);
    }
    else {
		console.log("Solving for rectangle with l = " + l +" and b = " + b);
		console.log("Perimeter: " + rect.perimeter(l,b));
		console.log("Area: " + rect.area(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);