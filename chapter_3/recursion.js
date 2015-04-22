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

// I know that -1 is getting to the recursive case because I'm getting RangeError: Maximum call stack size exceeded.  So that's good, in a way. I don't really know how to restructure this... at least not at 2:30am.
