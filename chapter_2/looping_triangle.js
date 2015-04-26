result = "";
for (var counter = 0; counter <= 7; ++counter)
  console.log(result = result + "#");

// solution without re-printing to console.log every time.
// my goal is to build up a string wiht the appropriate amounts of #s, and with line breaks added after every time that the row is incremented upon.


result = "";
row = "";
for (var i = 0; i < 7; i++) {
  row = "#".repeat(i + 1);
  result += (row + "\n");
}
return row;

// my jsbin that has what I'm trying: http://jsbin.com/kebudi/1/edit






// Refactored using .length
// result = "";
// for (var counter = 0; counter <= 7; ++counter)
//   console.log(result = result + "#");
//
//   if (i !== 7)
//     result += "\n"
// then print result to the console once
