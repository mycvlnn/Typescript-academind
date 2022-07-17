/** array type  */

interface Person {
  name: string
  age: number
  hobbies: string[]
}

const phuong: Person = {
  name: 'Le Thi Phuong',
  age: 22,
  hobbies: ['Sports', 'Cooking', 'Play game']
}

for (const hobby of phuong.hobbies) {
  console.log(hobby)
}

// -------------------

let number: number[]

number = [12, 23, 2, 34, 343]
