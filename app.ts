/** enum type  */

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

const myLocation = {
  id: 1,
  name: 'Ha Noi',
  left: Direction.Left
}

if (myLocation.left === Direction.Left) {
  console.log('Matched direction')
}
