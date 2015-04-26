// jsbin url: http://jsbin.com/hobadi/edit?js,console

var rangeArray = [];

var range = function(start, end) {
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
};

console.log(range(1,10));

var sumOfRange = function(array) {
  sum = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      sum = array[i];
    } else {
      sum += array[i];
    }
  }
  return sum;
};

console.log(sumOfRange(rangeArray));
