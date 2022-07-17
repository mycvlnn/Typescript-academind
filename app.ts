/** literal type  */

const logger = (
  a: number | string,
  b: number | string,
  resultConversion: 'as-number' | 'as-string'
) => {
  if (typeof a === 'number' || typeof b === 'number' || resultConversion === 'as-number') {
    return +a + +b
  } else {
    return a + b
  }
}

console.log(logger(1, 2, 'as-number'))
