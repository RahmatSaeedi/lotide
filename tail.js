// Returns the tail of an array. ie, everything after the first element.
// jshint esversion : 6
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  return array.slice(1);
};

let x = [1, 2, 3, 4];
let i = 2;
tail(x).forEach(a => {
  assertEqual(a, i++);
});
