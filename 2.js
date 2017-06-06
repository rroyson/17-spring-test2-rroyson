

var myArray = ["black","green","blue","navy","orange","gold","purple"]



for (var i=0;i< myArray.length;i+=1) {
   myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
}

console.log(myArray);
