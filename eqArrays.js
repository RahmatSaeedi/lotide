// Takes in two arrays and returns true or false, based on a perfect match.
// Does not work with nested arrays
// jshint esversion : 6

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let length = array1.length;
    while (length > 0) {
      length --;
      if (array1[length] !== array2[length]) {
        return false;
      }
    }
    return true;
  }
};


eqArrays([1, 2, 3], [1, 2, 3]);               // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]);   // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]);     // => false
