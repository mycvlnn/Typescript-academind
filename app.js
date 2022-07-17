/** enum type  */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var myLocation = {
    id: 1,
    name: 'Ha Noi',
    left: Direction.Left
};
if (myLocation.left === Direction.Left) {
    console.log('Matched direction');
}
