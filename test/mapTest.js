// jshint esversion : 6
const map = require('../map');
const assertArraysEqual = require('./eqArraysLogger');


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);