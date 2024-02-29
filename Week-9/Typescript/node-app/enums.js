var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var Grade;
(function (Grade) {
    Grade[Grade["O"] = 90] = "O";
    Grade[Grade["A"] = 80] = "A";
    Grade[Grade["B"] = 70] = "B";
})(Grade || (Grade = {}));
function doSomething(keyPressed) {
    console.log(keyPressed);
}
doSomething(Direction.up);
console.log(Grade.O);
