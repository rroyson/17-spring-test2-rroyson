const {keys} = require ('ramda')


var student = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12
};

function keysList(key) {
  return keys(key);
}

function valueList(value) {
  return `${value.name},${value.sclass},${value.rollno}`;
}

console.log(keysList(student));
console.log(valueList(student));
