var myString = "this is a string";
function findWord(string) {}

function found(word) {
  var x = myString.search(word);

  if (x >= 0 && x <= 10) {
    return word + " Was Found!";
  } else {
    return "sorry we could not find " + word;
  }
}

console.log(found("string"));
