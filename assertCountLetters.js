// Asserts the functionality of countLetters.js
// countLetters.js: returns an object containing counts of every letter in an input string
// jshint esversion : 6

const assertEqual = function(value1, value2) {
  if (value1 === value2) {
    console.log(`✅  Assertion Passed: ${value1} === ${value2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${value1} !== ${value2}`);
  }
};


const countLetters = function(str) {
  let out = {};
  
  str.split('').forEach(e => {
    out[e] = 0;
  });

  str.split('').forEach(letter => {
    out[letter] ++;
  });

  return out;
};


// Should pass all cases
const result1 = countLetters("Hi there.... Hehehehe...");
assertEqual(result1.H, 2);
assertEqual(result1.e, 6);
assertEqual(result1.h, 4);
assertEqual(result1.r, 1);
assertEqual(result1['.'], 7);
assertEqual(result1[' '], 2);