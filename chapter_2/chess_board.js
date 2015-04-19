var chessBoard = "# # # # \n # # # #";
for (counter = 0; counter < 4; counter++)
  console.log(chessBoard);

// flexible version

var twoSpaces = "# ";
grid = prompt("What size would you like your grid to be?", "");
// row length
row = console.log(twoSpaces.repeat(grid.toString));
