/** union type  */

const plus = (a: number | string, b: number | string) => {
  return +a + +b
}

plus(1, 2)
