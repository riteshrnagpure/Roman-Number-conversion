"use strict";
const conversionHelper = require("../../helper/conversionHelper");
/**
 * @function Controllers.convertNumber
 * @memberof Controller Convesion
 * @param {*} req {object}
 * @param {*} res {object}
 */
module.exports = (req, res) => {
  try {
    const { input } = req.params;
    console.log("Input given is:: ", input);
    let number, roman;
    let check = +input;
    // Here basically converted string into number and checked with itself
    // if it is number then value will be same else it will be NaN.
    // To decide whether Numbet to Roman needs to done or vice versa
    const response = {
      input
    };
    if (check === +input) {
      number = parseInt(input);
      roman = conversionHelper.convertNumberToRoman(number);
      console.log("Number conversion to its equivalent Roman is:: ", roman);
      response.result = roman;
      response.type = "Number to Roman Conversion";
    } else {
      roman = input;
      number = conversionHelper.convertRomanToNumber(roman);
      console.log("Roman conversion to its equivalent Number is:: ", number);
      response.result = number;
      response.type = "Roman To Number Conversion";
    }
    res.send(response);
  } catch (error) {
    console.log("error", error);
  }
};
