// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
// jshint esversion : 6

const takeUntil = function(array, predicate) {
  if (array instanceof Array && predicate instanceof Function) {
    let newArray = [];
    let i = 0;
    while (i < array.length && !predicate(array[i], i, array)) {
      newArray.push(array[i]);
      i++;
    }

    return newArray;
  } else {
    return [];
  }
};

module.exports = takeUntil;
