// var arrayList = "sagkjls";

// var stringarr= arrayList.split("").reverse().join();
// console.log(stringarr);

// duplicate([1, 2, 3, 4, 5]);
// function duplicate(arr) {
//     return console.log(arr.concat(arr));
//   }


// function createBase(baseNumber) {
//     return function(N) {
//       // we are referencing baseNumber here even though it was declared
//       // outside of this function. Closures allow us to do this in JavaScript
//       return console.log(baseNumber + N);
//     }
//   }
  
//   var addSix = createBase(6);
//   addSix(10);
//   addSix(21);
  
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
//   a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  console.log(a.split(""));

  return console.log((a === b)?true:false);
}