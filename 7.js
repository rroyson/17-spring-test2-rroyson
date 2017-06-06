const myArr = [1, 3, 4, 7, 24, 62, 73];

function checkIt(number) {
  if (number < 0) {
    return [""];
  } else if (myArr.includes(number)) {
    return number;
  } else return myArr[0];
}

console.log(checkIt());
