// jshint esversion : 6
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

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