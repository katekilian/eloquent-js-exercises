// jsbin url: http://jsbin.com/nafepu/edit?js,console

// basic chess board

var chessBoard = "# # \n # #\n";
for (counter = 1; counter <= 4; counter++)
  complete = chessBoard.repeat(counter / 2);
console.log(complete);

// only works for even numbered grid sizes

var twoSpaces = "# ";
grid1 = prompt("What size would you like your grid to be?", "");
numColumns = twoSpaces.repeat(grid1 / 2);
numRows = "";
for (counter = 1; counter <= grid1; counter += 1) {
  if (counter % 2 === 0) {
    numRows = numRows + (" " + numColumns + "\n");
  } else if (counter % 2 === 1) {
      numRows = numRows + (numColumns + "\n");
  }
}
console.log(numRows);

// solution for any-numbered grid sizes

grid2 = prompt("What size would you like your grid to be?", "");
row = "";
for (counter = 1; counter <= grid2; counter += 1) {
  if (counter % 2 === 1) {
    row = row + "#";
  } else if (counter % 2 === 0) {
    row = row + " ";
  }
}
numRows = "";
for (counter = 1; counter <= grid2; counter += 1) {
  if (counter % 2 === 0) {
    numRows = numRows + (" " + row + "\n");
  } else if (counter % 2 === 1) {
      numRows = numRows + (row + "\n");
  }
}
console.log(numRows);
