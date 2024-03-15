//Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
//Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

enum Direction {
    UP,
    DOWN,
    RIGHT,
    LEFT
}

function doSomething(keypressed : Direction){
    if(keypressed === Direction.UP){
        console.log("key pressed is up")
    }
    else if(keypressed === Direction.DOWN){
        console.log("key pressed is down")
    }
    else if(keypressed === Direction.LEFT){
        console.log("key pressed is left")
    }
    else{
        console.log("key pressed is right")
    }
}

(doSomething(Direction.UP))
doSomething(Direction.DOWN)
doSomething(Direction.LEFT)
doSomething(Direction.RIGHT)