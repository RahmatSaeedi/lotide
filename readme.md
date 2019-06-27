# Lotide
It's a simplified & minified version of [Lodash](https://github.com/lodash/lodash) library 

# Contents
## [assertEqual.js](assertEqual.js)
 A custom assert function with emoji icons.

Output
 ```bash
  🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
  ✅✅✅ Assertion Passed: 1 === 1
 ```
## [head.js](head.js)
 Returns the head of an array. Returns 'undefined' for empty array.
 
 ```javascript
head([1, 2, 3]);
// => 1
 
head([]);
// => undefined
 ```

 ## [tail.js](tail.js)
Returns the tail of an array. ie, everything after the first element.

 ```javascript
tail([1, 2, 3]);
// => [2, 3]
 
 ```
 ## [min.js](min.js)
 Returns the minimum of an array.

 ```javascript
  let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
  min(testArray);
  // => -8
 ```

## [eqArrays.js](eqArrays.js)
Takes in two arrays and returns true or false, based on a perfect match. This does not work with nested arrays.

```javascript
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
```

## [assertArraysEqual.js](assertArraysEqual.js)
 Take in two arrays, asserts that the two are identical, and `console.log` an appropriate message to the console. 
 