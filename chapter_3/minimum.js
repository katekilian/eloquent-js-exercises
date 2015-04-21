var findMinimum = function(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 === num2) {
    return "These numbers are the same!";
  } else {
    return num2;
  }
};
