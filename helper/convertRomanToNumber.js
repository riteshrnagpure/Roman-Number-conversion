"use strict";

/**
 * @function Helper.convertRomanToNumber
 * @memberof Helper
 * @param {*} roman {String}
 */

/*
    Algorithm
    01. Upper case the given roman string
    02. Manintain two separate array for constant keys in Roman and its value
    03. Loop through roman constants and check whether that key exists in roman string
        if Yes, then take corresponding value from its value and add that in number
        and replace that particular key with symbol '-'
    04. return number
 */
module.exports = roman => {
  roman = roman.toUpperCase();
  const romanConstants = [
    "M",
    "CM",
    "CD",
    "D",
    "XC",
    "C",
    "XL",
    "L",
    "IX",
    "X",
    "IV",
    "V",
    "I"
  ];
  const romanConstantsValue = [
    1000,
    900,
    400,
    500,
    90,
    100,
    40,
    50,
    9,
    10,
    4,
    5,
    1
  ];
  let index = 0,
    number = 0;
  for (let key in romanConstants) {
    index = roman.indexOf(romanConstants[key]);
    while (index != -1) {
      number += parseInt(romanConstantsValue[key]);
      roman = roman.replace(romanConstants[key], "-");
      index = roman.indexOf(romanConstants[key]);
    }
  }
  return number;
};
