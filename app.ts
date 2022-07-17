/** object type  */

interface Person {
  name: string
  age: number
}

const phuong: Person = {
  name: 'Le Thi Phuong',
  age: 22
}

// --------

const chris: { fullName: string; birthDay: string } = {
  fullName: 'Chris Lee',
  birthDay: '04/07/1999'
}

// ----------

type Animal = {
  kind: string
  name: string
  height: number
}

const dog: Animal = {
  kind: 'Co vu',
  name: 'Oggy',
  height: 0.5
}
