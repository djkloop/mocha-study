const add = require('./calc').add;
const today = require('./date').today;

console.log(today());
var x  = 9;
var y = 10;

var z = add(x, y);

console.log(z);
