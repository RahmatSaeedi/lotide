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


## [middle.js](middle.js)
Takes in an array and return the middle-most element(s) of the given array.
* For arrays with one or two elements, returns an empty array.
* For arrays with odd number of elements, an array containing a single middle element is returned.
* For arrays with an even number of elements, an array containing the two elements in the middle is returned.

```javascript
middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]


middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
```

## [assertMiddle.js](assertMiddle.js)
Asserts the functionality of middle.js

```bash
> node assertMiddle
✅  Assertion Passed:  ===
✅  Assertion Passed:  ===
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 3 === 3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 3,4 === 3,4
```

## [without.js](without.js)
Will return a subset of a given array, removing unwanted elements. 
This does not function correctly when using nested arrays or arrays of objects.

```javascript
without([1, 2, 3], [1]) // => [2, 3]
without([1, 2, 1, 3, 1], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
```
## [assertWithout.js](assertWithout.js)
Asserts the functionality of witout.js

```bash
> node assertWithout
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 1,2 === 1,2
```

## [flatten.js](flatten.js)
Given an array with other arrays inside, this function can flatten it into a single-level array.

```javascript
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]])
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

flatten(["1", ["2", ["3"]]]) // => [ '1', '2', '3' ]
```

## [assertFlatten.js](assertFlatten.js)
Asserts the functionality of witout.js

Output
```bash
✅  Assertion Passed: 1,2,3,4,5,6,7,8,9,10 === 1,2,3,4,5,6,7,8,9,10
✅  Assertion Passed: 1,2,3 === 1,2,3
```

## [countOnly.js](countOnly.js)
Takes in a collection of items and return an object containing counts of everything that the input object listed.

![Lotide countOnly](images/countOnly.png)

```js
// Given
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);
// Returns: { Jason: 1, Fang: 2 }
```


## [assertCountOnly.js](assertCountOnly.js)
Asserts the functionality of countOnly.js

```bash
> node assertCountOnly
✅  Assertion Passed: 1 === 1
✅  Assertion Passed: undefined === undefined
✅  Assertion Passed: 2 === 2
```