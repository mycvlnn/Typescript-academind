/**  function return types and void   */

// Trường hợp không trả về giá trị ( undefined)
const logger = (): void => {
  console.log('Hello world')
}

// Trường hợp trả về number
const plus = (a: number, b: number): number => {
  return a + b
}
