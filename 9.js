const {uniq} = require('ramda')

var myArr = [1,"dog",2,1,1,"cat","dog"]


function uniqueIt(arr) {
  return uniq(arr);
}

console.log(uniqueIt(myArr))
