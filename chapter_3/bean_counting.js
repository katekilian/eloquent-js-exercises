var countBs = function(string) {
  var stringLastIndex = string.length - 1;
  var i = 0;
  while (i <= stringLastIndex) {
    return string[i];
    i++;
  }
  // for (var i = 0; i <= stringLastIndex; i++) {
  //   return string[i];
  // }
};

console.log(countBs("hello"));

// why is it only looping through once? ARGH.  Tried as a while loop and still fails. I'm tired. Line 6 error: "Unreachable 'i' after 'return'. This must be the problem, but I don't understand it.
// What I'm trying to do:
// loop through each letter and, instead of line 5, to compare the value of each index of the array to "B".
// (instantiate variable to count number of Bs that exist, let's call it Bs, "var Bs = 0")
// If string[i] === "B", then Bs += 1
// after it's gone through all the letters in the string, return Bs, which should contain the number of characters in the string that match "B"
