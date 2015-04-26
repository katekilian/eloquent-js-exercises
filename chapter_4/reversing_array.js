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

var arrayReverseInPlace = function(array) {
  var tmp = "";
  var len = array.length - 1;
  for (i = 0; i <= array.length - 1; i++) {
    tmp = array[i];
      console.log("I was array[i]: " + tmp);
      console.log("I'm the index that array[i] is swapping with: " + len);
    array[i] = array[len];
      console.log("array[i] is now " + array[i]);
    array[len] = tmp;
      console.log("array len is now " + array[len]);
    len--;
      console.log("-----------");
  }
  return array;
};

console.log(arrayReverseInPlace(arr));

// Current issue for ReverseInPlace: if "return array;" is inside the loop, it only prints the outcome of one loop (of course) but you can see that the first and last indices have swapped.  If you move "return array;" OUTSIDE the loop but still inside the function, the output is the original, unswapped array... and I cannot figure out why for the life of me.
