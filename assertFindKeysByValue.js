// Asserts the functionality of findKeyByValue.js
// findKeysByValue.js: Searches for keys in an object where its value matches a given value. Returns an array.
// jshint esversion : 6

const eqArrays = function(array1, array2) {
  if (!(array1 instanceof Array) || !(array2 instanceof Array) || (array1.length !== array2.length)) {
    return false;
  } else {
    let index = array1.length;
    while (index > 0) {
      index --;
      if (array1[index] instanceof Array || array2[index] instanceof Array) {
        if (!eqArrays(array1[index], array2[index])) {
          return false;
        }
      } else if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
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