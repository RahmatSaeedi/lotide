// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;


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




takeUntil.assertFunctionality = function() {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  const results1 = takeUntil(data1, x => x < 0);
  const results2 = takeUntil(data2, x => x === ',');

  assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
  assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
};



module.exports = takeUntil;
