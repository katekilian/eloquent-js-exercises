arrArrays = [[1,2,3], [4,5], [6,7,8]];

var flatten = function(array) {
  array = array.reduce(function(a, b) {
    return a = a.concat(b);
  });
  return array;
};

flatten(arrArrays);

// the first way I solved it without making a flatten function

console.log(arrArrays.reduce(function(a, b) {
  return a = a.concat(b);
}));
