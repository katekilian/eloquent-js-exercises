// What Annie and I worked on today (4/23/15)
// the backwards way

// jsbin url: http://jsbin.com/pepisa/edit

var arrayToList = function(array){
  list = {};
  for (var i = array.length - 1; i >= 0; i--) {
    if ( i === array.length - 1) {
      list.value = array[i];
      list.rest = null;
    } else {
      list = { value: array[i], rest: list };
   	}
  }
  return list;
};

console.log(arrayToList([1, 2, 3]));
