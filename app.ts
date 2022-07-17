/**  Function Type   */

function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

// Function type

let combineValue1: Function

combineValue1 = printResult
combineValue1 = add

//combineValue1(1, 2) // Như này sẽ lỗi

// Định nghĩa type cụ thể

let combineValues: (a: number, b: number) => number

combineValues = add

//combineValues = printResult //type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'. Type 'void' is not assignable to type 'number'.ts(2322)
