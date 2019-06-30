// returns an object containing counts of every letter in an input string
// jshint esversion : 6
const assertEqual = require('./assertEqual');

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


countLetters.assertFunctionality = function() {
  // Should pass all cases
  const result1 = countLetters("Hi there.... Hehehehe...");
  assertEqual(result1.H, 2);
  assertEqual(result1.e, 6);
  assertEqual(result1.h, 4);
  assertEqual(result1.r, 1);
  assertEqual(result1['.'], 7);
  assertEqual(result1[' '], 2);
};


module.exports = countLetters;