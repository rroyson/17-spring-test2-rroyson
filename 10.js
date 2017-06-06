const {union} = require ('ramda')

var myArrOne = [1, 2, 3, 4, 5];
var myArrTwo = [6, 7, 8, 9, 10];

function unionIt(arr1, arr2) {
  return union(arr1, arr2);
}
console.log(unionIt(myArrOne, myArrTwo));
