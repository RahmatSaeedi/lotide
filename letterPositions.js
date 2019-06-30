// Returns an object, containing all the indices in the string where each character is found. Indicies are zero-based.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const letterPositions = function(str) {
  let out = {};
  
  str.split('').forEach(letter => {
    out[letter] = [];
  });

  for (let i = 0; i < str.length; i++) {
    out[str[i]].push(i);
  }

  return out;
};

letterPositions.assertFunctionality = function() {
  const result1 = letterPositions("hello hehehe");
  console.log("Testing " + this.name);
  assertArraysEqual(result1.h, [ 0, 6, 8, 10 ]);
  assertArraysEqual(result1.e, [ 1, 7, 9, 11 ]);
  assertArraysEqual(result1.l, [ 2, 3 ]);
  assertArraysEqual(result1.o, [ 4 ]);
  assertArraysEqual(result1[' '], [ 5 ]);
};


module.exports = letterPositions;