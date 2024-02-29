enum Direction {
    up,
    down,
    left,
    right
}


enum Grade {
    O = 90,
    A = 80,
    B = 70
}

enum Numbers {
    one=1,
    two, // becomes 2 by default
    three, // becomes 3
    four // becomes 4
    //The next value will be increment of the previous value
}

function doSomething(keyPressed:Direction){
    console.log(keyPressed)
}

doSomething(Direction.up)

console.log(Grade.O)