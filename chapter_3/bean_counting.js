// jsbin url: http://jsbin.com/cedice/edit

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

// I want to come up with a solution that handles either case.
// I tried this: if (string[i] === ("b" || "B"))
// I didn't try it without parens
// I also didn't do an 'else if', because there's got to be a simpler way
