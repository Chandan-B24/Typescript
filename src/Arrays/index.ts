//Arrays in typescript
const names:string[] = ["Alice","Bob","Ana"]; // using genera; [] syntax
const ids:Array<number> = [1,2,3]; // using <> generics to define an array

let colors:Array<string> = ["red","green"] // array methods
colors.push("yellow");
console.log(colors) // [ 'red', 'green', 'yellow' ]
colors.pop()
console.log(colors) // [ 'red', 'green' ]
colors.unshift("pink")
console.log(colors) // [ 'pink', 'red', 'green' ]
colors.shift()
console.log(colors) // [ 'red', 'green' ]

//finding the elements in array

let pets:Array<string> = ["cats","dogs","bird"]
console.log(pets.indexOf("cats")) // returns the index of the element in aa array || output : 0
console.log(pets.includes("dog")) // returns the boolean value based on the presence of value in an array || output : false

