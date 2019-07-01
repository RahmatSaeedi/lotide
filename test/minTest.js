// jshint esversion : 6
const assertEqual = require('./assertEqual');
const min = require('./min');

let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
assertEqual(min(testArray), -8);