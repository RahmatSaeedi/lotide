// asserts functionality of eqObjects.js
// eqObjects.js:
//    Take in two objects, checks whether that the two are identical, and returns a boolean.
//    Supports nested objects with premitive values, and nested arrays.
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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let k in object1) {
      if (object1[k] instanceof Array) {
        if (!eqArrays(object1[k], object2[k])) {
          return false;
        }
      } else if (object1[k] instanceof Object) {
        if (!eqObjects(object1[k], object2[k])) {
          return false;
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
    return true;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(eqObjects({ x: 1, y: 2, z: 'w' }, { x: 1, y: 2, z: 'w' }), true);
assertEqual(eqObjects({ y: 2, x: 1, z: 'w' }, { x: 1, y: 2, z: 'w' }), true);
assertEqual(eqObjects({ x: 1, y:{y: 2, z: {m:'w'}}}, { x: 1, y:{y: 2, z: {m:'w'}} }), true);
assertEqual(eqObjects({ x: 1, y: 2, z: 'w' }, { x: 1, y: 2, z: 'w', zz:'zz' }), false);
assertEqual(eqObjects({ x: 1, y: ["2", [3]], z: 'w' }, { x: 1, y: ["2", [3]], z: 'w' }), true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

//[1, [2, 3, [4, 5]]]