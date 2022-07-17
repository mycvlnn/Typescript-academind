/**  type alias  */

type InputLogger = number | string

type ResultConversion = 'as-number' | 'as-string'

const logger = (a: InputLogger, b: InputLogger, resultConversion: ResultConversion) => {
  if (typeof a === 'number' || typeof b === 'number' || resultConversion === 'as-number') {
    return +a + +b
  } else {
    return a + b
  }
}

console.log(logger(1, 2, 'as-number'))
