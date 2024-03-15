//Generics are a language independent concept
//Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
//Generics enable you to create components that work with any data type while still providing compile-time type safety.


function identity<T>(arg : T){
    console.log(arg)
}

let myArgument = identity<string>("Chandan".toUpperCase())
let myArgument2 = identity<number>(3)

