# Lotide
It's a simplified & minified version of [Lodash](https://github.com/lodash/lodash) library 

# Contents
## assertEqual.js
 A custom assert function with emoji icons.

Output
 ```bash
  🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
  ✅✅✅ Assertion Passed: 1 === 1
 ```
## head.js
 Returns the head of an array. Returns 'undefined' for empty array.
 
 ```javascript
head([1, 2, 3]);
// => 1
 
head([]);
// => undefined
 ```

 ## tail.js
Returns the tail of an array. ie, everything after the first element.

 ```javascript
tail([1, 2, 3]);
// => [2, 3]
 
 ```
 ## min.js
 Returns the minimum of an array.

 ```javascript
  let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
  min(testArray);
  // => -8
 ```

 ## stringReverser.js
Reverses the order of characters in a string. String are pssed via `bash` argv arguments.
 ```bash
node reverse.js hello goodbye
```
Returns:
```javascript
olleh
eybdoog
```
