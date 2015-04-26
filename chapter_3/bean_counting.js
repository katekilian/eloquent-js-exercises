// this solution works for only lowercase b:

var countBs = function(string) {
  var bCounter = 0;
  for (var i = 0; i <= string.length -1; i++) {
    if (string[i] === "b") {
      bCounter++;
    }
  }
  return bCounter;
};

console.log(countBs("goodbye"));
