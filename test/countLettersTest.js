// jshint esversion : 6
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');



const result1 = countLetters("Hi there.... Hehehehe...");
assertEqual(result1.H, 2);
assertEqual(result1.e, 6);
assertEqual(result1.h, 4);
assertEqual(result1.r, 1);
assertEqual(result1['.'], 7);
assertEqual(result1[' '], 2);