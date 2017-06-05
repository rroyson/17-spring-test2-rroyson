const {reverse} = require('ramda')

var myArr = ["black","green","blue","navy","orange","gold","purple"]
const array = myArr

function reverseArray(arr) {

  return reverse(arr)
  console.log(reverse(arr))
}

console.log(reverseArray(array))
