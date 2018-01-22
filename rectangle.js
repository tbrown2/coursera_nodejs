//simple node module 
//once you create this you need to import this and make use of it 
//callback is a function that will be supplied when it is imported
//using set timeout as a delay simulation (perhaps a database delay)
//when we integrate mongo db, then that delay won't be simulated
module.exports = (x,y,callback) => {
	if (x <= 0 || y <= 0) {
	   setTimeout(() => 
         callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
         2000);

    }
    else {
    //supplying the set timeout with a returned js object 
	  setTimeout(() => 
	  	callback(null, 
	  		{
		  		perimeter: () => (2*(x+y)),
				area: () => (x*y)
			}), 
	  	2000);
    }
}