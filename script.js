"use strict";
function expo(number, exponent, callback) {
  if (exponent === 0) {
    return callback(1);
  }

  function recursivePower(num, exp) {
    if (exp === 1) {
      return num;
    }
    return num * recursivePower(num, exp - 1);
  }

  return callback(recursivePower(number, exponent));
}
