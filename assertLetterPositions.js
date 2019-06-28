// Asserts the functionality of letterPositions.js
// letterPositions.js: Returns an object, containing all the indices in the string where each character is found. Indicies are zero-based.
// jshint esversion : 6

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑  Assertion Failed: Lengths don't match, ${array1.length} !== ${array2.length}`);
  } else {
    let length = array1.length;
    while (length > 0) {
      length --;
      if (array1[length] !== array2[length]) {
        console.log(`🛑  Assertion Failed: values or types don't match, ${array1[length]} !== ${array2[length]}`);
      }
    }
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  }
};

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

// Should pass all cases
const result1 = letterPositions("hello hehehe");
console.log(result1);
assertArraysEqual(result1.h, [ 0, 6, 8, 10 ]);
assertArraysEqual(result1.e, [ 1, 7, 9, 11 ]);
assertArraysEqual(result1.l, [ 2, 3 ]);
assertArraysEqual(result1.o, [ 4 ]);
assertArraysEqual(result1[' '], [ 5 ]);