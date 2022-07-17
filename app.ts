/** tupple type  */

interface Person {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // tupple
}

const phuong: Person = {
  name: 'Le Thi Phuong',
  age: 22,
  hobbies: ['Sports', 'Cooking', 'Play game'],
  role: [1, 'Author']
}
