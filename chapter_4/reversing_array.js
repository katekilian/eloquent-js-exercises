// jsbin url: http://jsbin.com/jexujas/edit

// reversing an array through outputting a new array:

var arr = ["a","b","c","d","e"];


var reverseArray = function(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

console.log(reverseArray(arr));

// reversing an array in place:
