// jsbin url: http://jsbin.com/linidi/edit?js,console

result = "";
for (var counter = 0; counter <= 7; ++counter)
  console.log(result = result + "#");

// refactored to accumulate the triangle inside result before printing to console

var result = "";
var row = "";
for (var i = 0; i < 7; i++) {
  row = "#".repeat(i + 1);
  result = result + (row + "\n");
}
console.log(result);
