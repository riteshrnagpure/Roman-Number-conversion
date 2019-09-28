"use strict";

/**
 * @function Helper.convertNumberToRoman
 * @memberof Helper
 * @param {*} number {number}
 */

/*
    Algorithm for converting given Number into Roman
    01. Maintained a Map of Number to its equivalent Roman representation
    02. Loop through the Map
    03. In while loop check whether current number is greater than or equial to value from map
        If yes, then add current key to roman result and decrease the number by current key value
    04. return roman result
 */
module.exports = num => {
  const romanToNumberMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let romanResult = "";
  for (let key in romanToNumberMap) {
    while (num >= romanToNumberMap[key]) {
      romanResult += key;
      num -= romanToNumberMap[key];
    }
  }
  return romanResult;
};
