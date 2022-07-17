/** literal type  */
var logger = function (a, b, resultConversion) {
  if (typeof a === 'number' || typeof b === 'number' || resultConversion === 'as-number') {
    return +a + +b
  } else {
    return a + b
  }
}
console.log(logger(1, 2, 'as-number'))
