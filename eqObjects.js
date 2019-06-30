// Take in two objects, checks whether that the two are identical, and returns a boolean.
// Supports nested objects with premitive values, and arrays.
// jshint esversion : 6
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let k in object1) {
      if (object1[k] instanceof Object) {
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


eqObjects.assertFunctionality = function() {
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
};


module.exports = eqObjects;