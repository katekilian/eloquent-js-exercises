var chessBoard = "# # # # \n # # # #\n";
for (counter = 1; counter <= 4; counter++)
  complete = chessBoard.repeat(counter);
console.log(complete);

// flexible version

var twoSpaces = "# ";
grid = prompt("What size would you like your grid to be?", "");
numColumns = twoSpaces.repeat(grid / 2);
numRows = "";
for (counter = 1; counter <= grid; counter += 1) {
  if (counter % 2 === 0) {
    numRows = numRows + (" " + numColumns + "\n");
  } else if (counter % 2 === 1) {
      numRows = numRows + (numColumns + "\n");
  }
}
console.log(numRows);
