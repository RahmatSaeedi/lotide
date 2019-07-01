// Takes in an array and return the middle-most element(s) of the given array.
// jshint esversion : 6

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { // even number of elements
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];

  } else if (length % 2 === 1) { // odd number of elements
    return [array[Math.floor(length / 2)]];
  }
};



module.exports = middle;