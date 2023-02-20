//this example is demonstrating the concept of hoisting.
var x = 5;
var y = 7;
var y = 10;
var z = x;
var f = y;
console.log(x, z, y, f);
var y = 7;
console.log(x, y, f, z);