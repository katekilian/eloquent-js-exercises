// What Annie and I worked on today (4/23/15)
// the backwards way
var arrayToList = function(array){
  list = {}
  for (var i = array.length - 1; i >= 0; i--) {
    if ( i === array.length - 1) {
      list["value"] = array[i];
      list["rest"] = null;
    } else {
      list = { value: array[i], rest: list }
   	}
  }
  return list;
};

console.log(arrayToList([1, 2, 3]));
// → {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
