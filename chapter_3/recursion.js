// TO-DO:
// 1) re-read the problem
// 2) attempt to solve it using Jeff's process
// 3) understand why recursion is good - OHHHH.  Is it because "2" is the base case of even-ness?  And what you do with a number greater than two is subtract 2 until you can see if the evenness is true?

// jsbin url: http://jsbin.com/suluzu/edit

// a working answer (except negative case) without recursion...

var isEven = function(num) {
  if (num < 0) {
    num = num * -1
  }
  if (num % 2 === 0) {
    return true;
  } else if (num % 2 === 1) {
    return false;
  } else if (num % 2 === (num - 2) % 2) {
    return true;
  }
};

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

// trying to use recursion?

var isEven = function(num) {
  if (num < 0) {
    num = num * -1
  }
  if (num % 2 === 0) {
    return true;
  } else if (num % 2 === 1) {
    return false;
  } else if ( isEven(num) === isEven(num - 2) ) {
    return true;
  }
};

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));
