// jsbin url: http://jsbin.com/jexujas/edit

var arrOdd = ["a","b","c","d","e","f","g"];
var arrEven = ["q","r","s","t"];

var reverseArray = function(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

console.log(reverseArray(arrOdd));
console.log(reverseArray(arrEven));

// using a tmp variable to hold the value of the places that are being swapped.

var arrayReverseInPlace = function(array) {
  var tmp = "";
  var len = array.length - 1;
  for (i = 0; i < ((array.length)/2); i++) {
    tmp = array[i];
    array[i] = array[len];
    array[len] = tmp;
    len--;
  }
  return array;
};

console.log(arrayReverseInPlace(arrOdd));
console.log(arrayReverseInPlace(arrEven));
