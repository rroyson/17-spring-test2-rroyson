const{sort} = require('ramda')

var myArr = [1,2,3,4,2,62]

var diff = function(a, b) { return a - b; };
console.log(sort(diff, myArr))
