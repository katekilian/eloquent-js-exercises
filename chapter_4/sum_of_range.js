rangeArray = []
var range = function(start, end) {
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

range(1,10);
