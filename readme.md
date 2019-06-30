# Lotide
It's a simplified & minified version of [Lodash](https://github.com/lodash/lodash) library 

# Contents
## [assertEqual](assertEqual.js)
 A custom assert function with emoji icons.

Output of `assertEqual.assertFunctionality()`
 ```bash
  ✅  Assertion Passed: Bootcamp === Bootcam
  ✅  Assertion Passed: 1 === 1
 ```
## [head](head.js)
 Returns the head of an array. Returns 'undefined' for empty array.
 
 ```javascript
head([1, 2, 3]);
// => 1
 
head([]);
// => undefined
 ```

 ## [tail](tail.js)
Returns the tail of an array. ie, everything after the first element.

 ```javascript
tail([1, 2, 3]);
// => [2, 3]
 
 ```
 ## [min](min.js)
 Returns the minimum of an array.

 ```javascript
  let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
  min(testArray);
  // => -8

  min.assertFunctionality();
  // Returns: ✅  Assertion Passed: -8 === -8
 ```

## [eqArrays](eqArrays.js)
Takes in two arrays and returns true or false, based on a perfect match. It also works with nested arrays.

```javascript
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
```

## [eqArrays.assertArraysEqual](eqArrays.js)
 Take in two arrays, asserts that the two are identical, and `console.log` an appropriate message to the console. 


## [middle](middle.js)
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

## [middle.assertFunctionality()](middle.js)
Asserts the functionality of middle.js

```bash
# middle.assertFunctionality()
✅  Assertion Passed:  ===
✅  Assertion Passed:  ===
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 3 === 3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 3,4 === 3,4
```

## [without](without.js)
Will return a subset of a given array, removing unwanted elements. 

```javascript
without([1, 2, 3], [1]) // => [2, 3]
without([1, 2, 1, 3, 1], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
```
## [without.assertFunctionality()](without.js)
Asserts the functionality of witout.js

```bash
# without.assertFunctionality()
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 1,2 === 1,2
```

## [flatten](flatten.js)
Given an array with other arrays inside, this function can flatten it into a single-level array.

```javascript
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]])
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

flatten(["1", ["2", ["3"]]]) // => [ '1', '2', '3' ]
```

## [flatten.assertFunctionality()](flatten.js)
Asserts the functionality of flatten.js

Output
```bash
✅  Assertion Passed: 1,2,3,4,5,6,7,8,9,10 === 1,2,3,4,5,6,7,8,9,10
✅  Assertion Passed: 1,2,3 === 1,2,3
```

## [countOnly](countOnly.js)
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


## [countOnly.assertFunctionality()](countOnly.js)
Asserts the functionality of countOnly.js

```bash
> node assertCountOnly
✅  Assertion Passed: 1 === 1
✅  Assertion Passed: undefined === undefined
✅  Assertion Passed: 2 === 2
```

## [countLetters](countLetters.js)
Returns an object containing count of every letter in an input string


## [countLetters.assertFunctionality()](countLetters.js)
Asserts the functionality of countLetters.js

```bash
> node assertCountLetters
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 6 === 6
✅  Assertion Passed: 4 === 4
✅  Assertion Passed: 1 === 1
✅  Assertion Passed: 7 === 7
✅  Assertion Passed: 2 === 2
```


## [letterPositions](letterPositions.js)
Returns an object, containing all the indices in the string where each character is found. Indicies are zero-based.

```js
letterPositions("hello hehehe");
/* Returns
{
  h: [ 0, 6, 8, 10 ],
  e: [ 1, 7, 9, 11 ],
  l: [ 2, 3 ],
  o: [ 4 ],
  ' ': [ 5 ]
}
*/
```

## [letterPositions.assertFunctionality()](letterPositions.js)
Asserts the functionality of letterPositions.js


```bash
# letterPositions.assertFunctionality()
✅  Assertion Passed: 0,6,8,10 === 0,6,8,10
✅  Assertion Passed: 1,7,9,11 === 1,7,9,11
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 4 === 4
✅  Assertion Passed: 5 === 5
```

## [findKeyByValue](findKeyByValue.js)
Searches for a key in an object where its value matches a given value.

```js
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  drama2:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
// Returns:  'drama'

findKeyByValue(bestTVShowsByGenre, "That '70s Show");
// Returns:  undefined
```

## [findKeyByValue.assertFunctionality()](findKeyByValue.js)
Asserts the functionality of findKeyByValue.js


## [findKeysByValue](findKeysByValue.js)
Searches for keys in an object where its value matches a given value. Returns an array.


```js
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  drama2:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
// Returns:  [ 'drama', 'drama2' ]

findKeyByValue(bestTVShowsByGenre, "That '70s Show");
// Returns:  []
```

## [findKeysByValue.assertFunctionality()](findKeysByValue.js)
Asserts the functionality of findKeysByValue.js

## [eqObjects](eqObjects.js)
Take in two objects, checks whether that the two are identical, and returns a boolean.
Supports nested objects with premitive values, and nested arrays.

```js
eqObjects({ x: 1, y: 2, z: 'w' }, { x: 1, y: 2, z: 'w' }); // => true
eqObjects({ y: 2, x: 1, z: 'w' }, { x: 1, y: 2, z: 'w' }); // => true
eqObjects({ x: 1, y:{y: [[2, [2]]], z: {m:'w'}}}, { x: 1, y:{y: [[2, [2]]], z: {m:'w'}} }); // => true
eqObjects({ x: 1, y: 2, z: 'w' }, { x: 1, y: 2, z: 'w', zz:'zz' }); // => false
```

## [eqObjects.assertFunctionality()](eqObjects.js)
Asserts functionality of eqObjects.js

Should return:
```bash
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: false === false
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: false === false
```

## [map](map.js)
Returns a new array based on the results of callback function.

Requires:
  * An array to map
  * A callback function
```js
const words = ["ground", "control", "to", "major", "tom"];
let firstLetters = map(words, word => word[0]);
// Returns: ['g','c','t','m','t']

assertArraysEqual(firstLetters, ['g','c','t','m','t']);
// Returns: ✅  Assertion Passed: g,c,t,m,t === g,c,t,m,t
```


## [takeUntil](takeUntil.js)
Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
```js
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
// results1 = [1, 2, 5, 7, 2]
// results2 = ["I've", "been", "to", "Hollywood"]


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
// Returns:
// ✅  Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
// ✅  Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood

```

## [findKey](findKey.js)
This method returns the key of the first element predicate returns truthy. Predicate takes (object[key], key, object).

```js
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
```

## testFunctionality
Tests the overall functionality of the liberary. If there is no error, than all tests should pass as shown below.


```bash
# Expected output
Testing assertEqual
✅  Assertion Passed: Bootcamp === Bootcamp
✅  Assertion Passed: 1 === 1
Testing countLetters
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 6 === 6
✅  Assertion Passed: 4 === 4
✅  Assertion Passed: 1 === 1
✅  Assertion Passed: 7 === 7
✅  Assertion Passed: 2 === 2
Testing countOnly
✅  Assertion Passed: 1 === 1
✅  Assertion Passed: undefined === undefined
✅  Assertion Passed: 2 === 2
Testing eqArrays
✅  Assertion Passed: 1,2,3 === 1,2,3
✅  Assertion Passed: 1,2,3 === 1,2,3
Testing eqObjects
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: false === false
✅  Assertion Passed: true === true
✅  Assertion Passed: true === true
✅  Assertion Passed: false === false
Testing findKey
✅  Assertion Passed: noma === noma
Testing findKeyByValue
✅  Assertion Passed: drama === drama
✅  Assertion Passed: undefined === undefined
Testing findKeysByValue
✅  Assertion Passed: drama,drama2 === drama,drama2
✅  Assertion Passed:  ===
Testing flatten
✅  Assertion Passed: 1,2,3,4,5,6,7,8,9,10 === 1,2,3,4,5,6,7,8,9,10
✅  Assertion Passed: 1,2,3 === 1,2,3
Testing head
✅  Assertion Passed: 5 === 5
✅  Assertion Passed: Hello === Hello
✅  Assertion Passed: undefined === undefined
Testing letterPositions
✅  Assertion Passed: 0,6,8,10 === 0,6,8,10
✅  Assertion Passed: 1,7,9,11 === 1,7,9,11
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 4 === 4
✅  Assertion Passed: 5 === 5
Testing map
✅  Assertion Passed: g,c,t,m,t === g,c,t,m,t
Testing middle
✅  Assertion Passed:  ===
✅  Assertion Passed:  ===
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 3 === 3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 3,4 === 3,4
Testing min
✅  Assertion Passed: -8 === -8
Testing tail
✅  Assertion Passed: 2 === 2
✅  Assertion Passed: 3 === 3
✅  Assertion Passed: 4 === 4
Testing takeUntil
✅  Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
✅  Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood
Testing without
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 2,3 === 2,3
✅  Assertion Passed: 1,2 === 1,2
```