// Asserts the functionality of findKeyByValue.js
// findKeyByValues.js: Searches for keys in an object where its value matches a given value. Returns an array.
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

const findKeyByValue = function(object, value) {
  let out = [];
  

  for (let key in object) {
    if (object[key] === value) {
      out.push(key);
    }
  }

  return out;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  drama2:  "The Wire"
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),[ 'drama', 'drama2' ]);
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"),[]);