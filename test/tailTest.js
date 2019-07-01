// jshint esversion : 6
const assertEqual = require('../assertEqual');
const tail = require('../tail');


let x = [1, 2, 3, 4];
let i = 2;
tail(x).forEach(a => {
  assertEqual(a, i++);
});